import { useState } from 'react';
import { create } from 'zustand';
import PratoCard from "../card/pratoCard"
function CardapioDataView() {
    const useCarrinho = create((set) => ({
        items: 0,
        adicionarItems: () => set((state) => { items: state.items + 1 })
    }))

    return (
        <>
            <div>
                <span>Items No Carrinho: {itemsCarrinho} </span>
            </div>
            <div>
                <PratoCard />
                <PratoCard />
                <PratoCard />
            </div>
        </>
    )
}

export default CardapioDataView