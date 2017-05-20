const {app, BrowserWindow} = require('electron');

let mainWindow;
var path = require('path')

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow(
    {
      width: 900,
      height: 600,
      backgroundColor: '#312450',
      icon: path.join(__dirname, '/icons/icon.png')
    });
  mainWindow.loadURL('file://' + __dirname + '/browser.html');
});
