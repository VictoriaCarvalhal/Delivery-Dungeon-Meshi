import 'dotenv/config'; // Carrega as variáveis do .env
import express from 'express';
import cors from 'cors';
import { prisma } from './prismaClient.js';

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

// --- PRATOS ---

app.post(`/pratos`, async(req,res) => {
  const {nome,desc,valor_unit} = req.body

  // Validação básica
  if (!nome || typeof nome !== 'string') {
    return res.status(400).json({ error: 'Campo "nome" é obrigatório e deve ser texto' });
  }
  if (!desc || typeof desc !== 'string') {
    return res.status(400).json({ error: 'Campo "desc" é obrigatório e deve ser texto' });
  }
  if (typeof valor_unit !== 'number' || valor_unit <= 0) {
    return res.status(400).json({ error: 'Campo "valor_unit" deve ser um número positivo' });
  }

  try {
    const result = await prisma.prato.create({
      data:{
        nome,
        desc,
        valor_unit,
      },
    })
    res.status(201).json(result)
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(409).json({ error: 'Já existe um prato com esse nome' });
    } else {
      res.status(500).json({ error: 'Erro ao criar prato' });
    }
  }
})

app.get(`/pratos`, async(req,res) => {
  try {
    const pratos = await prisma.prato.findMany()
    res.json(pratos)
  } catch (error) {
    console.error("Erro no GET /pratos:", error);
    res.status(500).json({ error: 'Erro ao buscar pratos' });
  }
})

// --- PEDIDOS ---

app.post(`/pedidos`, async(req,res) => {
  const {id_prato, id_carrinho, quant} = req.body

  // Validação básica
  if (!id_prato || typeof id_prato !== 'number') {
    return res.status(400).json({ error: 'Campo "id_prato" é obrigatório e deve ser um número' });
  }
  if (!id_carrinho || typeof id_carrinho !== 'number') {
    return res.status(400).json({ error: 'Campo "id_carrinho" é obrigatório e deve ser um número' });
  }
  if (quant !== undefined && (typeof quant !== 'number' || quant <= 0)) {
    return res.status(400).json({ error: 'Campo "quant" deve ser um número positivo' });
  }

  try {
    // Verifica se já existe um pedido com o mesmo prato nesse carrinho
    const pedidoExistente = await prisma.pedido.findFirst({
      where: { id_prato, id_carrinho },
    });

    let result;

    if (pedidoExistente) {
      // Se já existe, incrementa a quantidade
      result = await prisma.pedido.update({
        where: { id_pedido: pedidoExistente.id_pedido },
        data: {
          quant: { increment: quant || 1 },
        },
        include: { prato: true },
      });
    } else {
      // Se não existe, cria um novo
      result = await prisma.pedido.create({
        data: { id_prato, id_carrinho, quant: quant || 1 },
        include: { prato: true },
      });
    }

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar pedido' });
  }
})

app.get(`/pedidos`, async (req, res) => {
  try {
    const pedidos = await prisma.pedido.findMany({
      include: {
        prato: true,
      }
    })
    res.json(pedidos)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }
})

app.put(`/pedidos/:id/quant`, async(req,res) => {
  const { id } = req.params;

  try {
    const pedidoAtual = await prisma.pedido.findUnique({
      where: {id_pedido: Number(id)}
    });

    if(!pedidoAtual){
      return res.status(404).json({error:'Pedido não encontrado'});
    }

    if (pedidoAtual.quant > 1){
      const pedidoAtualizado = await prisma.pedido.update({
        where: { id_pedido: Number(id) },
        data: {
          quant: {
            decrement: 1,
          },
        },
        include: { prato: true },
      });  
      res.json(pedidoAtualizado);
    }
    else {
      await prisma.pedido.delete({
        where: {
              id_pedido: Number(id),
            },
      });
      res.status(200).json({ message: "Pedido removido do carrinho" });
    }
  } catch (error){
    res.status(500).json({error:'Erro ao atualizar pedido'});
  }
});

// --- CARRINHOS ---

app.post(`/carrinhos`, async (req, res) => {
  try {
    const result = await prisma.carrinho.create({
      data: {},  // carrinho começa vazio
      include: {
        pedido: true,
      }
    })
    res.status(201).json(result)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar carrinho' });
  }
})

app.get(`/carrinhos`, async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar carrinhos' });
  }
})

app.get(`/carrinhos/:id`, async (req, res) => {
  const { id } = req.params;

  try {
    const carrinho = await prisma.carrinho.findUnique({
      where: { id_carrinho: Number(id) },
      include: {
        pedido: {
          include: {
            prato: true,
          }
        }
      }
    });

    if (!carrinho) {
      return res.status(404).json({ error: 'Carrinho não encontrado' });
    }

    res.json(carrinho);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar carrinho' });
  }
})