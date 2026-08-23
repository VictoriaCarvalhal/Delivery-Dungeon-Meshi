import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '../generated/prisma/index.js';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter }).$extends({
    result:{
        pedido:{
            valor_total_pedido:{
                needs:{quant:true},
                compute(pedido){
                    if(pedido.prato && pedido.prato.valor_unit){
                        return pedido.quant * pedido.prato.valor_unit;
                    }
                    return 0;
                }
            }
        },
        carrinho:{
            valor_total_carrinho:{
                needs:{},
                compute(carrinho){
                    if(carrinho.pedido && Array.isArray(carrinho.pedido)){
                        return carrinho.pedido.reduce((soma,itempedido) =>{
                            return soma + (itempedido.valor_total_pedido || 0)
                        }, 0);
                    }
                    return 0;
                }
            },
            num_items:{
                needs:{},
                compute(carrinho){
                    if(carrinho.pedido && Array.isArray(carrinho.pedido)){
                        return carrinho.pedido.reduce((soma, itempedido) => {
                            return soma + (itempedido.quant || 0)
                        }, 0);
                    }
                    return 0;
                }
            }
        }
    }
});



