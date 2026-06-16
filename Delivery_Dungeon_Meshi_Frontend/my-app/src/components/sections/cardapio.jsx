import "./css/cardapio.css"
import CardapioDataView from "../dataView/cardapioDataView"

function Cardapio(onClick) {
    return (
        <>
        <h1>Isso é um cardapio</h1>
        <CardapioDataView onClick={onClick}/>
        </>
    )
}

export default Cardapio