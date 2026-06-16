import { useState } from 'react';
import { create } from 'zustand';
import PratoCard from "../card/pratoCard"
function CardapioDataView() {
    const useCarrinho = create((set) => ({
        items: 0,
        adicionarItems: () => set((state) => { items: state.items + 1 })
    }))

    const itemsAtuais = useCarrinho((state) => state.items)
    return (
        <>
            <div>
                <span>Items No Carrinho:{itemsAtuais}</span>
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