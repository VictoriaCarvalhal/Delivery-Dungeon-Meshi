import { usePedidoContext } from "../../../../context/pedidoContext"
import styles from './css/cartButton.module.css'
import "foundation-icons/foundation-icons.css"
import { Link } from 'react-router-dom'

function CartButton() {
    const { items } = usePedidoContext();

    return (
        <div className={styles.cartButton}>
            <Link to="/carrinho">
                <span className={styles.badge}>{items}</span>
                <i className="fi-shopping-cart"></i>
            </Link>
        </div>
    )
}

export default CartButton
