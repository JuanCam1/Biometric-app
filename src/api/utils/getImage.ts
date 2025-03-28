import { nativeImage } from "electron";
import fs from "node:fs";
import path from "node:path";
import { imagesFolderPath } from "./pathImages";

export const getImage = (nameImage: string) => {

  try {

    const filePath = path.join(imagesFolderPath, nameImage);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const imageBuffer = fs.readFileSync(filePath);
    return { blob: imageBuffer, type: "image/png" };
  } catch (_error) {
    return null;
  }

  // console.log("filePath: ", filePath);

  // if (!fs.existsSync(filePath)) {
  //   console.error("Error: La imagen no existe en la ruta especificada.");
  //   return "";
  // }

  // const image = nativeImage.createFromPath(filePath);

  // if (image.isEmpty()) {
  //   console.error("Error: La imagen no se pudo cargar correctamente.");
  //   return "";
  // }

  // const pngBuffer = image.toPNG();
  // const base64 = pngBuffer.toString("base64url");

  // return base64;
};
