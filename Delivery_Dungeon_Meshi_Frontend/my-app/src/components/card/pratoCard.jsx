import { useState } from 'react';
import { create } from 'zustand'

function PratoCard() {
    const useCarrinho = create((set)=> ({
        items: 0,
        adicionarItems: () => set((state) =>{items: state.items + 1})
    }))

    return (
        <>  
            <div>
                <span>Comida</span>
                <span>Algo Comestivel!</span>
                <button onClick = {useCarrinho.adicionarItemsNoCarrinho}>Adicionar</button>
            </div>
        </>
    )
}

export default PratoCard