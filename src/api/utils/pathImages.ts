import { app } from "electron";
import path from "node:path";

const userDataPath = app.getPath("userData");
export const imagesFolderPath = path.join(userDataPath, "Images");