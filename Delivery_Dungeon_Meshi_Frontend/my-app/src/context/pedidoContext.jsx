import {createContext, useContext, useState } from 'react';

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
        valor: 0.0,
    })
    const [Comanda, setComanda] = useState([])

    function onChangePedido(newName,newDes,newQuant,newValue,newId){
        setPedido({
            id: newId,
            name: newName,
            des: newDes,
            quant: newQuant,
            valor: newValor
        });
    }

    function onAddPedido(Pedido){
        setComanda( 
            [ ...comanda, Pedido ]
        );
    }

}