import styles from './css/cart.module.css'
import CarrinhoButton from './carrinhoButton'
import carrinhoDeCompras from '../../../../assets/carrinhoDeCompras.png'
import { useItemContext } from '../../../context/itemContext';
import { useNavigate } from "react-router-dom";
function Cart(){
    const {items} = useItemContext();
    const navigate = useNavigate();
    return(
        <>
            <div className={styles.pagamento}>
                <CarrinhoButton onSmash={() => navigate("/carrinho")} items={items} />
            </div>
        </>
    )
}

export default Cart