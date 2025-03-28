-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT 'empresa',
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
INSERT INTO "new_Company" ("address", "city", "description", "email", "id", "logo", "name", "nit", "phone", "postalCode", "website") SELECT "address", "city", "description", "email", "id", "logo", "name", "nit", "phone", "postalCode", "website" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
