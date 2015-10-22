# Assets

Automatically generates icons and splash screen assets.

### Installation

`$ meteor add poetic:assets`

### Configuration

###### How to Use:
Before running your meteor app add any launch/splash screen images and app icons to the root directory of your folder. App icons should be named icon.png and launch/splash screen images should be named splash.png. Check requirements for iOS icons below.

###### File Structure:
```
Sample Project
└───client
└───server
└───lib
└───public
└───private
    └───assets
        └───icons
            │   icon.png
            	etc.
        └───splash
            │   splash.png
            	etc.
```

### Mobile 
When running your meteor project on an ios simulator simply set up your `mobile-config.js` to show both app icons and launch screens at launch. Check out [meteor documentation](http://docs.meteor.com/#/full/mobileconfigjs) to make sure your mobile-config.js file is set up properly. The generated images should include all those needed for each iPhone size. Check out the size guide below for further reference.
###### App Icons: private/assets/icon

```
iPhone: 60 X 60: appicon-60.png
iPhone: 120 X 120: appicon-60@2x.png
iPhone: 180 X 180: appicon-60@3x.png
android_ldpi: drawable-ldpi.png
android_mdpi: drawable-mdpi.png
android_hdpi: drawable-hdpi.png
android_xhdpi: drawable-xhdpi.png
```
###### Launch Screens: private/assets/splash
```
iPhone: Default.png
iPhone_2x: Default@2x.png
iPhone5: Default-568h@2x.png
iPhone6: Default-667h@2x.png
iPhone6p_portrait: Default-Portrait-736h@3x.png
android_ldpi_portrait: drawable-ldpi.png
android_mdpi_portrait: drawable-mdpi.png
android_hdpi_portrait: drawable-hdpi.png
android_xhdpi_portrait: drawablexhhdpi.png
```


### Installation Cont.
###### iOS Icons
For the best result png image must first be in the shape of a square, same width and height, and no smaller than 180 x 180 (1024 x 1024 recommended). 

###### Splash Images
Splash screen sizes should correspond to the density and generalized size of the user's display. For best results use a square image of 1600x1600 pixels that includes the minimal amount of padding, making sure that the outer most pixels are all of the same color. The logo should generally be placed in the middle of the image for the best look.

*This packages uses the npm package [TIcons](https://github.com/FokkeZB/TiCons-CLI).
