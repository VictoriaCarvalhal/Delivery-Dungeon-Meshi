import CarrinhoButton from './carrinhoButton'
import { usePedidoContext } from "../../../../context/pedidoContext"
import styles from './css/cart.module.css'
function Cart(){
    const {items} = usePedidoContext();

    return(
        <>
            <div className={styles.cart}>
                <CarrinhoButton items={items} />
            </div>
        </>
    )
}

export default Cart