/*
  Warnings:

  - You are about to drop the column `Quant` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `ValorUnit` on the `Prato` table. All the data in the column will be lost.
  - Added the required column `quant` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor_unit` to the `Prato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "Quant",
ADD COLUMN     "quant" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Prato" DROP COLUMN "ValorUnit",
ADD COLUMN     "valor_unit" DOUBLE PRECISION NOT NULL;
