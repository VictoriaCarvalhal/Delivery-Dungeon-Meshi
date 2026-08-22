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

app.post(`/post/prato`, async(req,res) => {
  const {nome,desc,valor_unit} = req.body
  const result = await prisma.post.create({
    data:{
      nome,
      desc,
      valor_unit,
    },
  })
  res.json(result)
})

app.get(`/pratos`, async(res,res) => {
  const pratos = await prisma.Prato.findMany()
  res.json(pratos)
})

app.post(`/post/pedido`, async(req,res) =>{
  const {id_prato, id_carrinho, quant} = req.body
  const result = await prisma.post.create({
    data:{
      id_prato,
      id_carrinho,
      quant,
    },
  })
  res.json(result)
})

app.get(`/pedidos`, async (res, res) => {
  const pedidos = await prisma.Pedido.findMany()
  res.json(pedidos)
})

app.post(`/post/pedido`, async (req, res) => {
  const { id_prato, id_carrinho, quant } = req.body
  const result = await prisma.post.create({
    data: {
      id_prato,
      id_carrinho,
      quant,
    },
  })
  res.json(result)
})

app.get(`/pedidos`, async (res, res) => {
  const pedidos = await prisma.Pedido.findMany()
  res.json(pedidos)
})

app.post(`/post/carrinho`, async (req, res) => {
  const { id_pedido } = req.body
  const result = await prisma.post.create({
    data: {
      id_pedido,
    },
  })
  res.json(result)
})

app.get(`/carrinhos`, async (res, res) => {
  const carrinhos = await prisma.Carrinho.findMany()
  res.json(carrinhos)
})