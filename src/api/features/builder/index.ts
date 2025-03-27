import { ipcMain } from "electron";
import { changeStateBuilderController, createBuilderMultipleController, createBuilderUniqueController, deleteBuilderController, getAllBuilderController } from "./builder/builder-controller";

export const builderIPCHandler = () => {
  ipcMain.handle("createBuilderUnique", createBuilderUniqueController);
  ipcMain.handle("createBuilderMultiple", createBuilderMultipleController);
  ipcMain.handle("getAllBuilder", getAllBuilderController);
  ipcMain.handle("deleteBuilder", deleteBuilderController);
  ipcMain.handle("changeStateBuilder", changeStateBuilderController);
};
