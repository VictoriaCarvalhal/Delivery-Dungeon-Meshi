import carrinhoDeCompras from '../../../../assets/carrinhoDeCompras.png'
import styles from './css/carrinhoButton.module.css'
function CarrinhoButton({onSmash, items }) {
    return (
        <div className={styles.carrinhoButton}>
            <button onClick={onSmash}>
                <span>{items}</span>
                <img src={carrinhoDeCompras} alt="Carrinho de Compras" />
            </button>
        </div>
    
    )
}

export default CarrinhoButton