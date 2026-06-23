import CarrinhoButton from './carrinhoButton'
import { usePedidoContext } from "../../../../context/pedidoContext"
import { useNavigate } from "react-router-dom"
import styles from './css/cart.module.css'
function Cart(){
    const {items} = usePedidoContext();
    const navigate = useNavigate();
    return(
        <>
            <div className={styles.cart}>
                <CarrinhoButton onSmash={() => navigate("/carrinho")} items={items} />
            </div>
        </>
    )
}

export default Cart