-- CreateTable
CREATE TABLE "AdministrationArea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Visit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateEntry" DATETIME NOT NULL,
    "timeEntry" TEXT NOT NULL,
    "dateExit" DATETIME,
    "timeExit" TEXT,
    "observation" TEXT,
    "stateId" INTEGER NOT NULL,
    "visitantId" INTEGER NOT NULL,
    "authorizerId" INTEGER NOT NULL,
    "apartmentId" INTEGER,
    "administrationAreaId" INTEGER,
    CONSTRAINT "Visit_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Visit_visitantId_fkey" FOREIGN KEY ("visitantId") REFERENCES "Visitant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Visit_authorizerId_fkey" FOREIGN KEY ("authorizerId") REFERENCES "Resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Visit_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "Apartament" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Visit_administrationAreaId_fkey" FOREIGN KEY ("administrationAreaId") REFERENCES "AdministrationArea" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Visit" ("apartmentId", "authorizerId", "dateEntry", "dateExit", "id", "observation", "stateId", "timeEntry", "timeExit", "visitantId") SELECT "apartmentId", "authorizerId", "dateEntry", "dateExit", "id", "observation", "stateId", "timeEntry", "timeExit", "visitantId" FROM "Visit";
DROP TABLE "Visit";
ALTER TABLE "new_Visit" RENAME TO "Visit";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "AdministrationArea_name_key" ON "AdministrationArea"("name");
