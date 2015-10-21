# Assets

Automatically generates icons and splash screen assets.

### Installation

`$ meteor add poetic: meteor-assets`

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
        └───splash
            │   splash.png
```
### Installation Cont.
###### iOS Icons
For iOS app icons, the png image must first be in the shape of a square, same width and height, and no smaller than 180 x 180 (1024 x 1024 recommended). 

###### Splash Images
Splash screen sizes should correspond to the density and generalized size of the user's display. For best results use a square image of 1600x1600 pixels that includes the minimal amount of padding, making sure that the outer most pixels are all of the same color.

*This packages uses the npm package TIcons which requires ImageMagick to be installed. https://github.com/FokkeZB/TiCons-CLI.
