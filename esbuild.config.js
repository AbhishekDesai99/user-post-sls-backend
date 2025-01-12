const esbuild = require('esbuild');
const glob = require('glob');
const path = require('path');
// Match all .js files under src at any depth
const entryPoints = glob.sync('src/**/*.js');

esbuild.build({
  entryPoints: entryPoints,
  bundle: true,
  outdir: 'dist',
  platform: 'node',
  external: ['@aws-sdk/client-dynamodb', '@aws-sdk/lib-dynamodb', 'joi', 'moment', 'uuidv4'], // Exclude all npm modules that we will supply through lambda layers
  alias: {
    '@shared': path.resolve(__dirname, 'src/common'), // we can avoid this, it is just alias named imports
  },
}).then(() => {
  console.log('✅ Build completed successfully');
}).catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});