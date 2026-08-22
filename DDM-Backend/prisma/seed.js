import 'dotenv/config';
import { prisma } from '../src/prismaClient.js';

const pratos = [
  {
    nome: "Roast Basilisk",
    desc: "A dish made by Senshi",
    valor_unit: 25,
  },
  {
    nome: "Mandrake and Basilisk Omelet",
    desc: "A dish made by Senshi",
    valor_unit: 15,
  },
  {
    nome: "Living Armor Casserole",
    desc: "A dish made by Senshi",
    valor_unit: 40,
  },
];

async function main() {
  console.log("Inserindo pratos no banco de dados...\n");

  for (const prato of pratos) {
    const result = await prisma.prato.upsert({
      where: { nome: prato.nome },
      update: {
        desc: prato.desc,
        valor_unit: prato.valor_unit,
      },
      create: prato,
    });
    console.log(`✔ ${result.nome} (id: ${result.id_prato}) — R$${result.valor_unit}`);
  }

  console.log("\nPronto! Todos os pratos foram inseridos.");
}

main()
  .catch((e) => {
    console.error("Erro ao inserir pratos:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
