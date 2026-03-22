/* simple runtime check without making network calls */
const client = require('./dist/index.js');

if (typeof client.configureQrPointClient !== 'function') {
  console.error('configureQrPointClient not exported');
  process.exit(1);
}

// Ensure generated index exists and at least one service class is present
if (!client.AuthService || typeof client.AuthService.postApiAuthCheckToken !== 'function') {
  console.error('AuthService not available or missing expected method');
  process.exit(1);
}

console.log('OK', Object.keys(client).slice(0, 5));

