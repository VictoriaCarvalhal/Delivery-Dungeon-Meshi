import { useState } from 'react';
function PratoCard() {
    const [itemsCarrinho, setItemsCarrinho] = useState(0);

    function AdicionarItemsNoCarrinho() {
        setItemsCarrinho(itemsCarrinho + 1);
    }
    return (
        <>  
            <div>
                <span>Items No Carrinho: {itemsCarrinho} </span>
            </div>
            <div>
                <span>Comida</span>
                <span>Algo Comestivel!</span>
                <button onClick = {AdicionarItemsNoCarrinho}>Adicionar</button>
            </div>
        </>
    )
}

export default PratoCard