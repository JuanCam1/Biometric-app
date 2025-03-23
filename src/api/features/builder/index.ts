import { ipcMain } from "electron";
import { changeStateBuilder, createBuilderMultiple, createBuilderUnique, deleteBuilder, getAllBuilder } from "./builder/builder-controller";

export const builderIPCHandler = () => {
  ipcMain.handle("createBuilderUnique", createBuilderUnique);
  ipcMain.handle("createBuilderMultiple", createBuilderMultiple);
  ipcMain.handle("getAllBuilder", getAllBuilder);
  ipcMain.handle("deleteBuilder", deleteBuilder);
  ipcMain.handle("changeStateBuilder", changeStateBuilder);
};
