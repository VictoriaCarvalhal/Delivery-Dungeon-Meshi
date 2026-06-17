import "./css/cardapio.css"
import CardapioDataView from "../dataView/cardapioDataView"

function Cardapio({onPassInfo}) {
    return (
        <>
        <h1>Isso é um cardapio</h1>
        <CardapioDataView onClick={onPassInfo}/>
        </>
    )
}

export default Cardapio