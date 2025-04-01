import { ipcMain } from "electron";
import {
  builderByIdServiceController,
  changeStateBuilderController,
  createBuilderMultipleController,
  createBuilderUniqueController,
  deleteBuilderController,
  getAllBuilderController
} from "./builder/builder-controller";

export const builderIPCHandler = () => {
  ipcMain.handle("createBuilderUnique", createBuilderUniqueController);
  ipcMain.handle("createBuilderMultiple", createBuilderMultipleController);
  ipcMain.handle("getAllBuilder", getAllBuilderController);
  ipcMain.handle("builderById", builderByIdServiceController);
  ipcMain.handle("deleteBuilder", deleteBuilderController);
  ipcMain.handle("changeStateBuilder", changeStateBuilderController);
};
