import { create } from 'zustand';
import useCarrinho from '../dataView/cardapioDataView'

function PratoCard() {
    function adicionarItemsNoCarrinho() {
        return useCarrinho((state) => state.adicionarItems);
    }
    return (
        <>
            <div>
                <span>Comida</span>
                <span>Algo Comestivel</span>
                <button onClick={adicionarItemsNoCarrinho}>Adicionar</button>
            </div>
        </>
    )
}

export default PratoCard