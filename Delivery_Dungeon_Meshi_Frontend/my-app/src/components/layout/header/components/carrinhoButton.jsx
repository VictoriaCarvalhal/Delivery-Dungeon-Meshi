import carrinhoDeCompras from '../../../../assets/carrinhoDeCompras.png'
import styles from './css/carrinhoButton.module.css';

function CarrinhoButton({onSmash, items }) {
    return (
        <button className={styles.carrinho} onClick={onSmash}>
            <span className={styles.badge}>{items}</span>
            <img src={carrinhoDeCompras} alt="Carrinho de Compras" />
        </button>
    )
}

export default CarrinhoButton