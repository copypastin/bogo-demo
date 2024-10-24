const { app, BrowserWindow} = require('electron/main');

app.whenReady().then(() => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        },
    })
    win.removeMenu();
    win.loadFile('src/main.html');
})