import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '../generated/prisma/index.js';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter }).$extends({
    result:{
        Pedido:{
            valor_total_pedido:{
                needs:{quant:true},
                compute(Pedido){
                    if(Pedido.prato && Pedido.prato.valor_unit){
                        return Pedido.quant * Pedido.prato.valor_unit;
                    }
                    return 0;
                }
            }
        },
        Carrinho:{
            valor_total_Carrinho:{
                needs:{},
                compute(Carrinho){
                    if(Carrinho.pedido && Array.isArray(Carrinho.pedido)){
                        return Carrinho.pedido.reduce((soma,itemPedido) =>{
                            return soma + (itemPedido.valor_total_pedido || 0)
                        }, 0);
                    }
                    return 0;
                }
            },
            num_items:{
                needs:{},
                compute(Carrinho){
                    if(Carrinho.pedido && Array.isArray(Carrinho.pedido)){
                        return Carrinho.pedido.length;
                    }
                    return 0;
                }
            }
        }
    }
});



