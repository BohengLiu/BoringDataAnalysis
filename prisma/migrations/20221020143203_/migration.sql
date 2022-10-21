-- CreateTable
CREATE TABLE "TrackEvmAccount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chainId" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "type" INTEGER NOT NULL
);
