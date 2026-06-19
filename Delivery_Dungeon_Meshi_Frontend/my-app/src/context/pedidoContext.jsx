import { createContext, useContext, useState, useEffect } from 'react';
const PedidoContext = createContext();


export function usePedidoContext() {
    const context = useContext(PedidoContext);
}

export function PedidoProvider({ children }) {
    const [pedido, setPedido] = useState({
        id: null,
        name: "",
        desc: "",
        quant: 0,
        valueUni: 0.0,
        valueTotal: 0.0,
    })
    const [comanda, setComanda] = useState([])
    const [conta, setConta] = useState(0.0)
    const [items, setItems] = useState(0)

    useEffect(() => {
        const novaConta = comanda.reduce(
            (total, pedido) => total + pedido.valueTotal, 0
        );
        setConta(novaConta);
    }, [comanda]);

    function onAdicionarPedidoNaComanda(Prato) {
        const achar = comanda.find(pedido => pedido.name === Prato.name);

        if (achar !== undefined) {
            setComanda(
                comanda.map((pedido) => {
                    if (pedido.name === Prato.name) {
                        const novaQuant = pedido.quant + 1;
                        return { ...pedido, quant: novaQuant, valueTotal: pedido.valueUni * novaQuant };
                    }
                    return pedido;
                })
            );
        } else {
            const novoPedido = {
                id: Date.now(),
                name: Prato.name,
                desc: Prato.desc,
                quant: 1,
                valueUni: Prato.valor,
                valueTotal: Prato.valor,
            };

            setPedido(novoPedido);
            setComanda(prevComanda => [...prevComanda, novoPedido]);
        }
        setItems(items + 1);
        alert("Prato adicionado no carrinho");
    }

    function onRemoverPedidoDaComanda(Prato) {
        const pedidoAtivo = comanda.find(pedido => (pedido.name === Prato.name) && (pedido.quant > 0));
        if (pedidoAtivo !== undefined){
            setComanda(
                comanda.map((pedido) => {
                    if (pedido.name === Prato.name) {
                        const novaQuant = pedido.quant - 1;
                        return { ...pedido, quant: novaQuant, valueTotal: pedido.valueUni * novaQuant };
                    }
                    return pedido;
                })
            );
        }
        else{
            setComanda(
                comanda.filter(pedido => pedido.id !== Prato.id)
            );
        }

        setItems(items - 1);
        alert("Prato removido do carrinho");
    }



    return (
        <PedidoContext.Provider value={{ pedido, comanda, conta, items, onAdicionarPedidoNaComanda, onRemoverPedidoDaComanda }}>
            {children}
        </PedidoContext.Provider>
    );

}