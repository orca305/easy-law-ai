-- CreateTable
CREATE TABLE "laws" (
    "id" SERIAL NOT NULL,
    "law_id" TEXT NOT NULL,
    "law_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "laws_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "laws_law_id_key" ON "laws"("law_id");
