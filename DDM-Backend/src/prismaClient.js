import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
// 1. Importar o PrismaClient apontando para a sua pasta gerada
// Como o arquivo está dentro de 'src', usamos '../' para voltar uma pasta e achar a 'generated'
import { PrismaClient } from '../generated/prisma/index.js';
// 2. Configurar a conexão com o banco de dados usando o pacote 'pg'
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
// 3. Criar o adaptador do Prisma para o Postgres
const adapter = new PrismaPg(pool);
// 4. Finalmente, criar e exportar a instância do Prisma Client
export const prisma = new PrismaClient({ adapter });