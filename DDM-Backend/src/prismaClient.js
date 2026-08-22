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
                    if(Pedido.prato && Pedido.prato.valor_uni){
                        return Pedido.quant * Pedido.prato.valor_uni;
                    }
                    return 0;
                }
            }

        },
        Carrinho:{
            valor_total_Carrinho:{
                needs:{},
                compute(Carrinho){
                    if(Carrinho.Pedido && Array.isArray(Carrinho.Pedido)){
                        return Carrinho.Pedido.reduce((soma,itemPedido) =>{
                            return soma + (itemPedido.valor_total || 0)
                        }, 0);
                    }
                    return 0;
                }
            },
            num_items:{
                needs:{},
                compute(Carrinho){
                    if(Carrinho.Pedido && Array.isArray(Carrinho.Pedido)){
                        return Carrinho.Pedido.lenght;
                    }
                    return 0;
                }
            }
        }
    }
});



