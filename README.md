# Developer Documentations

**Clone and run for a quick way to see Electron in action.**

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/jayuda/devdoc
# Go into the repository
cd devdoc
# Install dependencies
npm install
# Run the app
npm start
```


Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## To Build

### MAC OS
```
electron-packager ../DEVDOC/ DEVDOC --overwrite --icon=icons/icon.icns
```

### UBUNTU
```
electron-packager . --overwrite --platform=linux --arch=x64 --icon=icons/png/256X256.png --prune=true
```

### WINDOWS
```
electron-packager . --overwrite --platform=win32 --arch=ia32 --icon=icons/win/icon.ico --version-string.CompanyName=JayudaCE --version-string.FileDescription=JayudaCE --version-string.ProductName=\"Developer Documentations\"
```


## Resources for Learning Electron

- [electron.atom.io/docs](http://electron.atom.io/docs) - all of Electron's documentation
- [electron.atom.io/community/#boilerplates](http://electron.atom.io/community/#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
