import styles from './css/cart.module.css'
import CarrinhoButton from './carrinhoButton'
import carrinhoDeCompras from '../../../../assets/carrinhoDeCompras.png'
import { useItemContext } from '../../../context/itemContext';
function Cart(){
    const { items, onAddItems } = useItemContext();
    return(
        <>
            <div className={styles.pagamento}>
                <CarrinhoButton onClick={onAddItems} items={items} />
            </div>
        </>
    )
}

export default Cart