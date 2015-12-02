var fs = Npm.require('fs-extra'),
    path = Npm.require('path'),
    ticons = Npm.require('ticons');


Plugin.registerCompiler({
  filenames: ['icon.png', 'splash.png']
}, function () {
  var compiler  = new AssetsCompiler();
  return compiler;
});

function AssetsCompiler() {}

AssetsCompiler.prototype.processFilesForTarget = function (files) {

  fs.lstat('private/assets/', function(err, stats){
    if(err){
      files.forEach(function (file) {
        var baseDir = process.env.PWD;
        var assetsDir = path.join(process.env.PWD, 'private/assets');
        var cacheDir = path.join(baseDir, '.meteor/local/assets');
        var fileName = file.getBasename();
        var fileType = null;
        var type = null;

        if (fileName === 'splash.png') {
          fileType = 'splashes';
          cacheDir = path.join(cacheDir, 'splash');

        } else if (fileName === 'icon.png') {
          fileType = 'icons';
          cacheDir = path.join(cacheDir, 'icons');
        }

        ticons[fileType]({
          input: fileName,
          outputDir: cacheDir,
          platforms: ['iphone','ipad','android'],
          sdkVersion: '4.0.0',
        }, function (err, output) {
          if (err) {
            throw err;
        }

        var filesToCopy;
          switch(fileType){
            case 'splashes':
              filesToCopy = {
                'Resources/iPhone': 'splash',
                'platform/android/res/drawable-hdpi/background.9.png': 'splash/drawable-hdpi.png',
                'platform/android/res/drawable-mdpi/background.9.png': 'splash/drawable-mdpi.png',
                'platform/android/res/drawable-xhdpi/background.9.png': 'splash/drawable-xhdpi.png',
                'platform/android/res/drawable-xxhdpi/background.9.png': 'splash/drawable-xxhdpi.png'
              }
              break;
            case 'icons': {
              filesToCopy = {
                'Resources/iPhone': 'icon',
                '/MarketplaceArtwork.png':'icon/appicon-512.png',
                '/DefaultIcon.png': 'icon/appicon-1028.png',
                'platform/android/res/drawable-mdpi/appicon.png': 'icon/drawable-mdpi.png',
                'platform/android/res/drawable-hdpi/appicon.png':'icon/drawable-hdpi.png',
                'platform/android/res/drawable-xhdpi/appicon.png':'icon/drawable-xhdpi.png',
                'platform/android/res/drawable-xxhdpi/appicon.png':'icon/drawable-xxhdpi.png'
              }
              break;
            }
          }
          
          for (key in filesToCopy) {
            var fromPath = path.join(cacheDir, key);
            var toPath = path.join(assetsDir, filesToCopy[key]);
            fs.copy(fromPath, toPath, function (err) {
              if (err) { 
                console.log("ERROR: " + err);
              }
            });
          }

        });
      });
    }
  });
};
