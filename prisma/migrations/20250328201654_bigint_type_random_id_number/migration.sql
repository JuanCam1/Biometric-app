/*
  Warnings:

  - You are about to alter the column `randomId` on the `Company` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "nit" TEXT NOT NULL,
    "randomId" BIGINT
);
INSERT INTO "new_Company" ("address", "city", "description", "email", "id", "logo", "name", "nit", "phone", "postalCode", "randomId", "website") SELECT "address", "city", "description", "email", "id", "logo", "name", "nit", "phone", "postalCode", "randomId", "website" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
