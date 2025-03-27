import { ipcMain } from "electron";
import { changeNamesSettingsController, changeThemeController, getSettingsOptionsController } from "./setting-controller";

export const settingsIPCHandler = () => {
  ipcMain.handle("changeTheme", changeThemeController);
  ipcMain.handle("changeNamesSettings", changeNamesSettingsController);
  ipcMain.handle("getSettingsOptions", getSettingsOptionsController);
};
