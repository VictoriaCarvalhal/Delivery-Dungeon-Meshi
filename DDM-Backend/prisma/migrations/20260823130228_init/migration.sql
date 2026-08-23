-- CreateTable
CREATE TABLE "Prato" (
    "id_prato" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "valor_unit" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Prato_pkey" PRIMARY KEY ("id_prato")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id_pedido" SERIAL NOT NULL,
    "id_prato" INTEGER NOT NULL,
    "id_carrinho" INTEGER NOT NULL,
    "quant" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "id_carrinho" SERIAL NOT NULL,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id_carrinho")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prato_nome_key" ON "Prato"("nome");

-- CreateIndex
CREATE INDEX "Prato_id_prato_idx" ON "Prato"("id_prato");

-- CreateIndex
CREATE INDEX "Pedido_id_pedido_idx" ON "Pedido"("id_pedido");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_id_prato_id_carrinho_key" ON "Pedido"("id_prato", "id_carrinho");

-- CreateIndex
CREATE INDEX "Carrinho_id_carrinho_idx" ON "Carrinho"("id_carrinho");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_prato_fkey" FOREIGN KEY ("id_prato") REFERENCES "Prato"("id_prato") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_carrinho_fkey" FOREIGN KEY ("id_carrinho") REFERENCES "Carrinho"("id_carrinho") ON DELETE CASCADE ON UPDATE CASCADE;
