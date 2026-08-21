import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '../generated/prisma/index.js';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter }).$extends({
    result:{
        pedido:{
            valor_total:{
                needs:{quant:true},
                compute(pedido){
                    if(pedido.prato && pedido.prato.valor_uni){
                        return pedido.quant * pedido.prato.valor_uni;
                    }
                    return 0;
                }
            }
        },
        carrinho:{
            conta:{
                needs:{},
                compute(carrinho){
                    if(carrinho.pedido && Array.isArray(carrinho.pedido)){
                        return carrinho.pedido.reduce((soma,itemPedido) =>{
                            return soma + (itemPedido.valor_total || 0)
                        }, 0);
                    }
                    return 0;
                }
            }
        }
    }
});



