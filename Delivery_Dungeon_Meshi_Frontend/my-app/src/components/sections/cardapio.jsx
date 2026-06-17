import "./css/cardapio.css"
import CardapioDataView from "../dataView/cardapioDataView"

function Cardapio({onAddItem}) {
    return (
        <>
        <h1>Isso é um cardapio</h1>
        <CardapioDataView onClick={onAddItem}/>
        </>
    )
}

export default Cardapio