

function PratoCard() {

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