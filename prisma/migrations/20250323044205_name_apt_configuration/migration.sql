-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Configuration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "theme" TEXT NOT NULL DEFAULT 'light',
    "builderType" TEXT NOT NULL DEFAULT 'Torre',
    "aptType" TEXT NOT NULL DEFAULT 'Apartamento',
    "maxVehiclesPerResident" INTEGER NOT NULL DEFAULT 2
);
INSERT INTO "new_Configuration" ("builderType", "id", "maxVehiclesPerResident", "theme") SELECT "builderType", "id", "maxVehiclesPerResident", "theme" FROM "Configuration";
DROP TABLE "Configuration";
ALTER TABLE "new_Configuration" RENAME TO "Configuration";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
