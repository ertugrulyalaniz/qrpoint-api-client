#!/usr/bin/env node
// Fetches the live OpenAPI spec, regenerates the client, diffs the API surface
// against the last sync, builds, and commits with a conventional message whose
// type drives the version bump made by standard-version.
//
// Usage:
//   node scripts/sync-api.mjs [--dry] [--no-commit] [--force] [--url=<spec url>]

import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SURFACE_FILE = join(ROOT, 'api-surface.json');
const OUTPUT_DIR = join(ROOT, 'src/generated');

const args = process.argv.slice(2);
const has = (flag) => args.includes(flag);
const DRY = has('--dry');
const NO_COMMIT = has('--no-commit') || DRY;
const FORCE = has('--force');
const SPEC_URL =
  args.find((a) => a.startsWith('--url='))?.slice('--url='.length) ??
  process.env.QRPOINT_OPENAPI_URL ??
  'https://api.qrpoint.com.tr:6201/openapi/v1.json';

const run = (cmd, cmdArgs, opts = {}) =>
  execFileSync(cmd, cmdArgs, { cwd: ROOT, stdio: 'inherit', ...opts });
const capture = (cmd, cmdArgs) =>
  execFileSync(cmd, cmdArgs, { cwd: ROOT, encoding: 'utf8' }).trim();

/** Compact, diffable description of the API surface. */
function surfaceOf(spec) {
  const endpoints = [];
  for (const [path, item] of Object.entries(spec.paths ?? {})) {
    for (const method of Object.keys(item)) {
      if (['get', 'put', 'post', 'delete', 'patch', 'head', 'options'].includes(method)) {
        endpoints.push(`${method.toUpperCase()} ${path}`);
      }
    }
  }
  return {
    endpoints: endpoints.sort(),
    models: Object.keys(spec.components?.schemas ?? {}).sort(),
  };
}

const diffSets = (before, after) => ({
  added: after.filter((x) => !before.includes(x)),
  removed: before.filter((x) => !after.includes(x)),
});

const bullet = (items, max = 15) => {
  const shown = items.slice(0, max).map((i) => `  - ${i}`);
  if (items.length > max) shown.push(`  - ...and ${items.length - max} more`);
  return shown.join('\n');
};

// ---------------------------------------------------------------- fetch spec
console.log(`→ fetching ${SPEC_URL}`);
const res = await fetch(SPEC_URL);
if (!res.ok) {
  console.error(`spec fetch failed: HTTP ${res.status}`);
  process.exit(1);
}
const rawSpec = await res.text();
const spec = JSON.parse(rawSpec);
const specHash = createHash('sha256').update(rawSpec).digest('hex');

const after = surfaceOf(spec);
const previous = existsSync(SURFACE_FILE)
  ? JSON.parse(readFileSync(SURFACE_FILE, 'utf8'))
  : { specHash: null, endpoints: [], models: [] };

console.log(
  `→ spec: ${after.endpoints.length} endpoints, ${after.models.length} models`
);

if (previous.specHash === specHash && !FORCE) {
  console.log('✓ spec unchanged since last sync — nothing to do (use --force to regenerate anyway)');
  process.exit(0);
}

const ep = diffSets(previous.endpoints, after.endpoints);
const md = diffSets(previous.models, after.models);
const firstSync = previous.specHash === null;

// ------------------------------------------------------------- generate/build
const tmpSpec = join(mkdtempSync(join(tmpdir(), 'qrpoint-spec-')), 'openapi.json');
writeFileSync(tmpSpec, rawSpec);

if (DRY) {
  console.log('→ --dry: skipping codegen and build');
} else {
  console.log('→ generating client');
  run('npx', ['openapi', '--input', tmpSpec, '--output', OUTPUT_DIR, '--client', 'axios']);
  console.log('→ building');
  run('npm', ['run', 'build']);
}

// ------------------------------------------------------------------- report
const breaking = ep.removed.length > 0 || md.removed.length > 0;
const additive = ep.added.length > 0 || md.added.length > 0;

const summary = [];
if (ep.added.length) summary.push(`+${ep.added.length} endpoint`);
if (ep.removed.length) summary.push(`-${ep.removed.length} endpoint`);
if (md.added.length) summary.push(`+${md.added.length} model`);
if (md.removed.length) summary.push(`-${md.removed.length} model`);
if (!summary.length) summary.push('schema/type changes only');

console.log(`\nAPI delta: ${summary.join(', ')}`);
if (ep.added.length) console.log(`new endpoints:\n${bullet(ep.added)}`);
if (ep.removed.length) console.log(`removed endpoints:\n${bullet(ep.removed)}`);
if (md.added.length) console.log(`new models:\n${bullet(md.added)}`);
if (md.removed.length) console.log(`removed models:\n${bullet(md.removed)}`);

// standard-version reads this commit: `!`/BREAKING CHANGE → major, feat → minor, fix → patch
const type = breaking ? 'feat(api)!' : additive ? 'feat(api)' : 'fix(api)';
const subject = firstSync
  ? `sync client with backend (${after.endpoints.length} endpoints)`
  : `sync client with backend (${summary.join(', ')})`;

let body = '';
if (ep.added.length) body += `\nAdded endpoints:\n${bullet(ep.added, 40)}\n`;
if (ep.removed.length) body += `\nRemoved endpoints:\n${bullet(ep.removed, 40)}\n`;
if (md.added.length) body += `\nAdded models:\n${bullet(md.added, 40)}\n`;
if (md.removed.length) body += `\nRemoved models:\n${bullet(md.removed, 40)}\n`;
if (breaking) {
  body += `\nBREAKING CHANGE: ${ep.removed.length} endpoint(s) and ${md.removed.length} model(s) were removed from the backend spec.\n`;
}

const message = `${type}: ${subject}\n${body}`;

if (DRY) {
  console.log(`\n--- commit message (dry run) ---\n${message}`);
  process.exit(0);
}

writeFileSync(
  SURFACE_FILE,
  `${JSON.stringify(
    { specUrl: SPEC_URL, specHash, syncedAt: new Date().toISOString(), ...after },
    null,
    2
  )}\n`
);

if (NO_COMMIT) {
  console.log('\n✓ generated + built. Skipping commit (--no-commit).');
  process.exit(0);
}

run('git', ['add', '-A', 'src', 'api-surface.json']);
const staged = capture('git', ['diff', '--cached', '--name-only']);
if (!staged) {
  console.log('\n✓ spec hash changed but generated output is identical — nothing to commit.');
  process.exit(0);
}
run('git', ['commit', '-m', message]);
console.log(`\n✓ committed: ${type}: ${subject}`);
console.log('Next: npm run release  (standard-version bumps the version from this commit, then publishes)');
