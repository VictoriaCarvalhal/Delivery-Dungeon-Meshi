import PratoCard from "../card/pratoCard"
function CardapioDataView() {
    const [itemsCarrinho, setItemsCarrinho] = useState(0);

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