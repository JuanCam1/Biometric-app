/*
  Warnings:

  - You are about to drop the column `phone` on the `Resident` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "phone" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Resident" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "idCard" TEXT NOT NULL,
    "documentTypeId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,
    "apartmentId" INTEGER NOT NULL,
    CONSTRAINT "Resident_documentTypeId_fkey" FOREIGN KEY ("documentTypeId") REFERENCES "TypeDocument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Resident_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Resident_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "Apartament" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Resident" ("apartmentId", "documentTypeId", "id", "idCard", "name", "stateId") SELECT "apartmentId", "documentTypeId", "id", "idCard", "name", "stateId" FROM "Resident";
DROP TABLE "Resident";
ALTER TABLE "new_Resident" RENAME TO "Resident";
CREATE UNIQUE INDEX "Resident_idCard_key" ON "Resident"("idCard");
CREATE INDEX "Resident_idCard_name_idx" ON "Resident"("idCard", "name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
