-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT 'sin descripción',
    "logo" TEXT NOT NULL DEFAULT 'sin logo',
    "address" TEXT NOT NULL DEFAULT 'sin dirección',
    "city" TEXT NOT NULL DEFAULT 'sin ciudad',
    "postalCode" TEXT NOT NULL DEFAULT 'sin código postal',
    "phone" TEXT NOT NULL DEFAULT 'sin teléfono',
    "email" TEXT NOT NULL DEFAULT 'sin email',
    "website" TEXT NOT NULL DEFAULT 'sin web',
    "nit" TEXT NOT NULL DEFAULT 'sin NIT'
);
INSERT INTO "new_Company" ("address", "city", "description", "email", "id", "logo", "name", "nit", "phone", "postalCode", "website") SELECT coalesce("address", 'sin dirección') AS "address", coalesce("city", 'sin ciudad') AS "city", coalesce("description", 'sin descripción') AS "description", coalesce("email", 'sin email') AS "email", "id", coalesce("logo", 'sin logo') AS "logo", "name", coalesce("nit", 'sin NIT') AS "nit", coalesce("phone", 'sin teléfono') AS "phone", coalesce("postalCode", 'sin código postal') AS "postalCode", coalesce("website", 'sin web') AS "website" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
