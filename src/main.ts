import { app, BrowserWindow, ipcMain, Menu } from "electron";
import { shell } from "electron";
import path from "node:path";
import started from "electron-squirrel-startup";

if (started) {
	app.quit();
}

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		title: "Biometrico",
		minHeight: 600,
		minWidth: 500,
		frame: true,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});

	mainWindow.maximize();
	mainWindow.setMenu(null);

	Menu.setApplicationMenu(null);

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

ipcMain.on("quit", () => {
	app.quit();
});

ipcMain.on("minimize", () => {
	BrowserWindow.getFocusedWindow()?.minimize();
});

ipcMain.on("maximize", () => {
	const focusedWindow = BrowserWindow.getFocusedWindow();
	if (focusedWindow?.isMaximized()) {
		focusedWindow.unmaximize();
	} else {
		focusedWindow?.maximize();
	}
});
