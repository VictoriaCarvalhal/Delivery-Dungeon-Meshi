import { createContext, useContext, useState } from 'react';
import { MockPedidos } from '../mocks/mockPedidos.json'
const PedidoContext = createContext();

export function usePedidoContext() {
    return useContext(ItemContext);
}

export function PedidoProvider({ children }) {
    const [Pedido, setPedido] = useState({
        id: null,
        name: "",
        des: "",
        quant: 0,
        value: 0.0,
    })
    const [comanda, setComanda] = useState([])

    function onAtualizarComanda({ newName, newDes, newQuant, newValue }) {
        const [novo, setNovo] = useState(true)
        const [achar, setAchar] = useState(undefined)
        const [novaComanda, setNovaComanda] = useState([])
        // O que eu quero fazer: 
        // Primeiro checa se ja existe esse valor na lista. 
        // Para fazer isso eu preciso analisar cada item da lista.
        // Eu posso fazer isso com um map
        setAchar(comanda.find(comanda => comanda.Pedido.name = newName))
        if (achar != undefined) {
            setNovo(false)
        }
        if (novo) {
            const novoPedido = {
                id: Date.now(),
                name: newName,
                des: newDes,
                quant: newQuant,
                value: newValue
            };

            setPedido(novoPedido);

            setComanda(prevComanda => [...prevComanda, novoPedido]);
        }
        else {
            setNovaComanda(
                meuArray.map((pedido) => { 
                    if (pedido.name === newName) { 
                        return { ...pedido, quant: (pedido.quant + 1) }; 
                    }
                    return pedido;
                }) 
            );
            setComanda(novaComanda);
        }

    }

    return (
        <PedidoContext.Provider value={{ pedido, comanda, onAtualizarComanda }}>
            {children}
        </PedidoContext.Provider>
    );

}