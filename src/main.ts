import { app, BrowserWindow, Menu } from "electron";
import { shell } from "electron";
import path from "node:path";
import started from "electron-squirrel-startup";
import { template } from "./api/utils/templateMenu";
import { defaultData } from "./api/data/data";
import { builderIPCHandler } from "./api/features/builder";
import { installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import { settingsIPCHandler } from "./api/features/setting/setting";

if (started) {
  app.quit();
}

const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    title: "Biometrico",
    minHeight: 600,
    minWidth: 500,
    frame: true,
    autoHideMenuBar: true,
    show: true,
    // contentSecurityPolicy: "script-src 'self' 'unsafe-eval'",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.maximize();
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }

  mainWindow.webContents.openDevTools({
    mode: "right",
  });

  installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
    .then(([redux, react]) => console.log(`Added Extensions:  ${redux.name}, ${react.name}`))
    .catch((err) => console.log('An error occurred: ', err));

  try {
    await defaultData();
    builderIPCHandler();
    settingsIPCHandler();
  } catch (error) {
    // app.exit();
    console.log("😒", error);
  }
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// ipcMain.on("quit", () => {
//   app.quit();
// });

// ipcMain.on("minimize", () => {
//   BrowserWindow.getFocusedWindow()?.minimize();
// });

// ipcMain.on("maximize", () => {
//   const focusedWindow = BrowserWindow.getFocusedWindow();
//   if (focusedWindow?.isMaximized()) {
//     focusedWindow.unmaximize();
//   } else {
//     focusedWindow?.maximize();
//   }
// });
