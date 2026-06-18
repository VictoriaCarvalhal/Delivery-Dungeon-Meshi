import {createContext, useContext, useState } from 'react';
import {MockPedidos} from '../mocks/mockPedidos.json'
const PedidoContext = createContext(); 

export function usePedidoContext(){
    return useContext(ItemContext);
}

export function PedidoProvider({ children }){
    const [Pedido, setPedido] = useState({
        id: null,
        name: "",
        des: "",
        quant: 0,
        value: 0.0,
    })
    const [comanda, setComanda] = useState([])

    function onAtualizarComanda({ name, des, quant, value }) {
        
        const novoPedido = {
            id: Date.now(),
            name: name,
            des: des,
            quant: quant,
            value: value
        };
    
        setPedido(novoPedido);
        
        setComanda(prevComanda => [...prevComanda, novoPedido]);
    }

    return (
        <PedidoContext.Provider value={{ pedido, comanda, onAtualizarComanda }}>
            {children}
        </PedidoContext.Provider>
    );

}