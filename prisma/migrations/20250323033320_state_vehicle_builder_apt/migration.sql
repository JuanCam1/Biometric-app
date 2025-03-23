/*
  Warnings:

  - Added the required column `stateId` to the `Apartament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateId` to the `Builder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateId` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Apartament" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "builderId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,
    CONSTRAINT "Apartament_builderId_fkey" FOREIGN KEY ("builderId") REFERENCES "Builder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Apartament_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Apartament" ("builderId", "id", "name") SELECT "builderId", "id", "name" FROM "Apartament";
DROP TABLE "Apartament";
ALTER TABLE "new_Apartament" RENAME TO "Apartament";
CREATE UNIQUE INDEX "Apartament_name_key" ON "Apartament"("name");
CREATE UNIQUE INDEX "Apartament_builderId_name_key" ON "Apartament"("builderId", "name");
CREATE TABLE "new_Builder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,
    CONSTRAINT "Builder_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Builder" ("id", "name") SELECT "id", "name" FROM "Builder";
DROP TABLE "Builder";
ALTER TABLE "new_Builder" RENAME TO "Builder";
CREATE UNIQUE INDEX "Builder_name_key" ON "Builder"("name");
CREATE TABLE "new_Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "licensePlate" TEXT NOT NULL,
    "description" TEXT,
    "typeId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,
    CONSTRAINT "Vehicle_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeVehicle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Vehicle_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Vehicle" ("description", "id", "licensePlate", "typeId") SELECT "description", "id", "licensePlate", "typeId" FROM "Vehicle";
DROP TABLE "Vehicle";
ALTER TABLE "new_Vehicle" RENAME TO "Vehicle";
CREATE UNIQUE INDEX "Vehicle_licensePlate_key" ON "Vehicle"("licensePlate");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
