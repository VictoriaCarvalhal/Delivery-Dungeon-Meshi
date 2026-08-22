/*
  Warnings:

  - You are about to drop the column `id_pedido` on the `Carrinho` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_prato,id_carrinho]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Carrinho" DROP COLUMN "id_pedido";

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_id_prato_id_carrinho_key" ON "Pedido"("id_prato", "id_carrinho");
