import { ipcMain } from "electron";
import {
  changeNamesSettingsController,
  changeThemeController,
  getDataCompanyController,
  getSettingsOptionsController,
  updateDataCompanyController
} from "./setting-controller";

export const settingsIPCHandler = () => {
  ipcMain.handle("changeTheme", changeThemeController);
  ipcMain.handle("changeNamesSettings", changeNamesSettingsController);
  ipcMain.handle("getSettingsOptions", getSettingsOptionsController);
  ipcMain.handle("getDataCompany", getDataCompanyController);
  ipcMain.handle("updateDataCompany", updateDataCompanyController);
};
