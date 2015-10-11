Package.describe({
  name: 'poetic:assets',
  version: '0.0.1',
  summary: 'TiCons wrapper for automatically generating icon and splash screen assets',
  git: 'https://github.com/poetic/assets',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});

Package.registerBuildPlugin({
  name: 'generateAssets',
  sources: ['assets.js'],
  npmDependencies: {
    'fs-extra': '0.24.0',
    'ticons': '0.15.3'
  }
});
