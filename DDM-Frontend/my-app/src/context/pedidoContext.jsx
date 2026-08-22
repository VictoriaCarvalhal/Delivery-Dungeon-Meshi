import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const PedidoContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export function usePedidoContext() {
    const context = useContext(PedidoContext);
    return context;
}

export function PedidoProvider({ children }) {
    const [carrinhoId, setCarrinhoId] = useState(null);
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(false);

    // Valores derivados — sem useState, sem useEffect
    const items = useMemo(
        () => pedidos.reduce((total, p) => total + p.quant, 0),
        [pedidos]
    );

    const conta = useMemo(
        () => pedidos.reduce((total, p) => {
            // Usa o campo computado do Prisma se disponível, senão calcula
            if (p.valor_total_pedido !== undefined) {
                return total + p.valor_total_pedido;
            }
            return total + (p.prato ? p.prato.valor_unit * p.quant : 0);
        }, 0),
        [pedidos]
    );

    // Cria um carrinho vazio no backend
    const inicializarCarrinho = useCallback(async () => {
        try {
            const res = await fetch(`${API_URL}/carrinhos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await res.json();
            setCarrinhoId(data.id_carrinho);
            setPedidos(data.pedido || []);
            return data.id_carrinho;
        } catch (error) {
            console.error('Erro ao criar carrinho:', error);
        }
    }, []);

    // Busca os pedidos do carrinho ativo no backend
    const fetchPedidos = useCallback(async (id) => {
        const carId = id || carrinhoId;
        if (!carId) return;
        try {
            const res = await fetch(`${API_URL}/carrinhos/${carId}`);
            const data = await res.json();
            setPedidos(data.pedido || []);
        } catch (error) {
            console.error('Erro ao buscar pedidos:', error);
        }
    }, [carrinhoId]);

    // Adicionar pedido — delega ao backend (com upsert)
    const adicionarPedido = useCallback(async (prato) => {
        setLoading(true);
        let currentCarrinhoId = carrinhoId;

        // Cria o carrinho na primeira adição
        if (!currentCarrinhoId) {
            currentCarrinhoId = await inicializarCarrinho();
        }

        try {
            const res = await fetch(`${API_URL}/pedidos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id_prato: prato.id_prato,
                    id_carrinho: currentCarrinhoId,
                    quant: 1,
                }),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Erro ao adicionar pedido');
            }

            await fetchPedidos(currentCarrinhoId);
            alert("Prato adicionado no carrinho");
        } catch (error) {
            console.error('Erro ao adicionar pedido:', error);
            alert("Erro ao adicionar prato no carrinho");
        } finally {
            setLoading(false);
        }
    }, [carrinhoId, fetchPedidos, inicializarCarrinho]);

    // Remover pedido — delega ao backend (decrementa ou deleta)
    const removerPedido = useCallback(async (pedido) => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/pedidos/${pedido.id_pedido}/quant`, {
                method: 'PUT',
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Erro ao remover pedido');
            }

            await fetchPedidos();
            alert("Prato removido do carrinho");
        } catch (error) {
            console.error('Erro ao remover pedido:', error);
            alert("Erro ao remover prato do carrinho");
        } finally {
            setLoading(false);
        }
    }, [fetchPedidos]);

    return (
        <PedidoContext.Provider value={{
            pedidos, items, conta, loading,
            adicionarPedido, removerPedido,
        }}>
            {children}
        </PedidoContext.Provider>
    );
}