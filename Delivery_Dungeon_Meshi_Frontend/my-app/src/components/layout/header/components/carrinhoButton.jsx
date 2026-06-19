import carrinhoDeCompras from '../../../../assets/carrinhoDeCompras.png'

function CarrinhoButton({onSmash, items }) {
    return (
        <button onClick={onSmash}>
            <span>{items}</span>
            <img src={carrinhoDeCompras} alt="Carrinho de Compras" />
        </button>
    )
}

export default CarrinhoButton