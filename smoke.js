/* runtime check of both build outputs, without making network calls */

const assert = (condition, message) => {
  if (!condition) {
    console.error(message);
    process.exit(1);
  }
};

const cjs = require('./dist/index.js');

assert(typeof cjs.configureQrPointClient === 'function', 'cjs: configureQrPointClient not exported');
assert(typeof cjs.toQrPointError === 'function', 'cjs: toQrPointError not exported');
assert(
  cjs.AuthService && typeof cjs.AuthService.postApiAuthCheckToken === 'function',
  'cjs: AuthService not available or missing expected method'
);

// The error helper must normalize anything, including non-Error values.
const normalized = cjs.toQrPointError({ name: 'ApiError', status: 401, body: { message: 'nope' } });
assert(normalized.status === 401 && normalized.message === 'nope', 'cjs: toQrPointError did not normalize an ApiError-like value');

import('./dist/index.mjs')
  .then((esm) => {
    assert(typeof esm.configureQrPointClient === 'function', 'esm: configureQrPointClient not exported');
    assert(
      esm.AuthService && typeof esm.AuthService.postApiAuthCheckToken === 'function',
      'esm: AuthService not available or missing expected method'
    );
    console.log('OK cjs + esm', Object.keys(cjs).slice(0, 5));
  })
  .catch((error) => {
    console.error('esm: failed to import dist/index.mjs');
    console.error(error);
    process.exit(1);
  });
