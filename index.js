const electron = require('electron');

const { app, BrowserWindow, Menu } = electron;

let mainWindow, addWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 750,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/main.html`);

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

function createAddWindow(){
    addWindow = new BrowserWindow({
        height: 250,
        webPreferences: {
            nodeIntegration: true
        }
    })
}

const menuTemplate = [{
    label: 'File',
    submenu: [
        { label: 'New Todo'},
        {
            label: 'Quit',
            accelerator: process.platform === 'darwin' ? 'Command+Q': 'Ctrl+Q',
            click(){
                app.quit();
            }
        }
    ]
}];

if(process.platform === 'darwin'){ 
    menuTemplate.unshift({ label: 'Electron' });
}
