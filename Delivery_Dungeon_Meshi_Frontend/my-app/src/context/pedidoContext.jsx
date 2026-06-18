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
        const [novo, setNovo] = useState(true)
        const [achar, setAchar] = useState(undefined)
        const [novaComanda, setNovaComanda] = useState([])
        setAchar(comanda.find(comanda => comanda.Pedido.name = Prato.name))
        if (achar != undefined) {
            setNovo(false)
        }
        if (novo) {
            const novoPedido = {
                id: Date.now(),
                name: Prato.name,
                des: Prato.desc,
                quant: 1,
                valueUni: Prato.valor,
                valueTotal: 0
            };

            setPedido(novoPedido);

            setComanda(prevComanda => [...prevComanda, novoPedido]);
        }
        else {
            setNovaComanda(
                novaComanda.map((pedido) => {
                    if (pedido.name === Prato.name) {
                        return { ...pedido, quant: (pedido.quant + 1) };
                    }
                    return pedido;
                })
            );
            setComanda(novaComanda);
            alert("Prato adicionado no carrinho");
        }

    }

    function onRemoverPedidoDaComanda(Prato) {
        setComanda(
            comanda.filter(pedido => pedido.id != Prato.id)
        );
        alert("Prato removido do carrinho");
    }
    function onCalcularConta() {
        const [novaComanda, setNovaComanda] = useState([]);
        setNovaComanda(
            novaComanda.map((pedido) => {
                return { ...pedido, valueTotal: (pedido.valueUni * pedido.quant) };
                return pedido;
            })
        );
        setComanda(novaComanda);
        alert("Valores Totais de cada pedido atualizados");

        comanda.map((pedido) => {
            conta += pedido.valueTotal;
        })

        alert("Valor da conta do pedido atualizado");
    }

    return (
        <PedidoContext.Provider value={{ pedido, comanda, conta, onAdicionarPedidoNaComanda, onRemoverPedidoDaComanda, onCalcularConta }}>
            {children}
        </PedidoContext.Provider>
    );

}