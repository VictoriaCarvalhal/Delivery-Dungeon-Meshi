import 'dotenv/config'; // Carrega as variáveis do .env
import express from 'express';
import cors from 'cors';
import prisma from './prismaClient';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
const dynamicCorsOptions = (req, callback) => {
  let corsOptions;
  
  // Define a origem permitida baseada no ambiente (process.env.FRONTEND_URL em produção)
  // Se não existir a variável, usa o localhost por padrão.
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5175';

  if (req.path.startsWith('/auth/connect/')) {
    corsOptions = {
      origin: frontendUrl,
      credentials: true,
    };
  } else {
    // Em produção, é mais seguro bloquear o acesso de terceiros (não usar '*')
    corsOptions = { 
      origin: process.env.NODE_ENV === 'production' ? frontendUrl : '*' 
    };
  }
  
  callback(null, corsOptions);
};

app.use(cors(dynamicCorsOptions));
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  // res.send(`Esse é o backend do delivery dungeon meshi`);
  res.json({ message: 'DDM Backend está rodando!' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//Minha REST API 

app.post(`/pratos`, async(req,res) => {
  const {nome,desc,valor_unit} = req.body
  const result = await prisma.prato.create({
    data:{
      nome,
      desc,
      valor_unit,
    },
  })
  res.json(result)
})

app.get(`/pratos`, async(req,res) => {
  const pratos = await prisma.prato.findMany()
  res.json(pratos)
})

app.post(`/pedidos`, async(req,res) =>{
  const {id_prato, id_carrinho, quant} = req.body
  const result = await prisma.pedido.create({
    data:{
      id_prato,
      id_carrinho,
      quant,
    },
    include:{
      prato: true,
    }
  })
  res.json(result)
})

app.get(`/pedidos`, async (req, res) => {
  const pedidos = await prisma.pedido.findMany({
    include: {
      prato: true,
    }
  })
  res.json(pedidos)
})

app.put(`/pedidos/:id/quant`, async(req,res) =>{
  const { id } = req.params;

  try {

    const pedidoAtual = await prisma.pedido.findUnique({
      where: {id_pedido: Number(id)}
    });

    if(!pedidoAtual){
      return res.json({error:'Pedido nao encontrado'});
    }

    if (pedidoAtual.quant > 1){

      const pedidoAtualizado = await prisma.pedido.update({
        where: { id_pedido: Number(id) },
        data: {
          quant: {
            decrement: 1,
          },
        },
      });  
      res.json(pedidoAtualizado);
    }
    else {
      const pedidoDeletado = await prisma.pedido.delete({
        where: {
              id_pedido: Number(id),
            },
      });
      res.json({ message: "Pedido deletado com sucesso!" });
    }
  } catch (error){
    res.json({error:'Ocorreu um erro ou o pedido não existe'});
  }
});

app.post(`/carrinhos`, async (req, res) => {
  const { id_pedido } = req.body
  const result = await prisma.carrinho.create({
    data: {
      id_pedido,
    },
    include: {
      pedido: true,
    }
  })
  res.json(result)
})

app.get(`/carrinhos`, async (req, res) => {
  const carrinhos = await prisma.carrinho.findMany({
    include: {
      pedido: {
        include:{
          prato: true,
        }
      }
    }
  })
  res.json(carrinhos)
})