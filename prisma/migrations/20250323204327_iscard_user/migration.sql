/*
  Warnings:

  - Added the required column `documentTypeId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCard` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "idCard" TEXT NOT NULL,
    "documentTypeId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,
    CONSTRAINT "User_documentTypeId_fkey" FOREIGN KEY ("documentTypeId") REFERENCES "TypeDocument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("email", "id", "password", "phone", "roleId", "stateId", "username") SELECT "email", "id", "password", "phone", "roleId", "stateId", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_idCard_key" ON "User"("idCard");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
