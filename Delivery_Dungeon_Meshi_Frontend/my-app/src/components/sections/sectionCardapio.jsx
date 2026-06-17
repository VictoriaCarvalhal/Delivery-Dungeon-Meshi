import styles from "./css/cardapio.module.css"
import CardapioDataView from "../dataView/cardapioDataView"

function SectionCardapio() {
    return (
        <>
        <h1 className={styles.tituloCardapio}>Cardápio</h1>
        <CardapioDataView/>
        </>
    )
}

export default SectionCardapio