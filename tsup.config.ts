import { defineConfig } from 'tsup';

// CommonJS output and type declarations still come from `tsc` (npm run build:cjs),
// which keeps the existing dist/ layout intact. This adds the ESM bundle that lets
// Next.js and Metro tree-shake the 125 generated services down to the ones actually
// imported, instead of pulling the whole client into the bundle.
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  outExtension: () => ({ js: '.mjs' }),
  dts: false,
  sourcemap: true,
  clean: false,
  treeshake: true,
  splitting: false,
  target: 'es2020',
  platform: 'neutral',
  // Left to the consumer's bundler/runtime so the right build (node vs browser)
  // is picked; form-data ships with axios, which is already a dependency.
  external: ['axios', 'form-data'],
});
