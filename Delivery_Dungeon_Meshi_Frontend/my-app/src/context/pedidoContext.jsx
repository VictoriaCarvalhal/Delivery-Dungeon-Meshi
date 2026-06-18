import { createContext, useContext, useState } from 'react';
const PedidoContext = createContext();


export function usePedidoContext() {
    return useContext(PedidoContext);
}

export function PedidoProvider({ children }) {
    const [pedido, setPedido] = useState({
        id: null,
        name: "",
        des: "",
        quant: 0,
        valueUni: 0.0,
        valueTotal: 0.0,
    })
    const [comanda, setComanda] = useState([])
    const [conta, setConta] = useState(0.0)
    function onAdicionarPedidoNaComanda(Prato) {
        const achar = comanda.find(pedido => pedido.name === Prato.name);

        if (achar !== undefined) {
            // prato já existe na comanda — incrementa quantidade
            setComanda(
                comanda.map((pedido) => {
                    if (pedido.name === Prato.name) {
                        return { ...pedido, quant: pedido.quant + 1 };
                    }
                    return pedido;
                })
            );
            alert("Prato adicionado no carrinho");
        } else {
            // prato novo — adiciona à comanda
            const novoPedido = {
                id: Date.now(),
                name: Prato.name,
                des: Prato.desc,
                quant: 1,
                valueUni: Prato.valor,
                valueTotal: Prato.valor,
            };

            setPedido(novoPedido);
            setComanda(prevComanda => [...prevComanda, novoPedido]);
        }
    }

    function onRemoverPedidoDaComanda(Prato) {
        setComanda(
            comanda.filter(pedido => pedido.id !== Prato.id)
        );
        alert("Prato removido do carrinho");
    }
    function onCalcularConta() {
        const comandaAtualizada = comanda.map((pedido) => ({
            ...pedido,
            valueTotal: pedido.valueUni * pedido.quant,
        }));
        setComanda(comandaAtualizada);

        const novaConta = comandaAtualizada.reduce(
            (total, pedido) => total + pedido.valueTotal,
            0
        );
        setConta(novaConta);
    }

    return (
        <PedidoContext.Provider value={{ pedido, comanda, conta, onAdicionarPedidoNaComanda, onRemoverPedidoDaComanda, onCalcularConta }}>
            {children}
        </PedidoContext.Provider>
    );

}