const {app, BrowserWindow} = require('electron')

const path = require('node:path')

const createWindow = () => {
    const window = new BrowserWindow({
        width:1000,
        height:600,
        maximizable : false,
        fullscreenable: false,
        resizable: false,
        webPreferences : {
            nodeIntegration : true,
            preload :path.join(__dirname,'preload.js')
        }
    })

    window.loadFile("./src/index.html")
}

app.whenReady().then(createWindow)