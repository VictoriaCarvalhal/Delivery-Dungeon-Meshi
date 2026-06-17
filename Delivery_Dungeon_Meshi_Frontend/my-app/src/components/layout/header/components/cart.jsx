import styles from './css/cart.module.css'
import CarrinhoButton from '../button/carrinhoButton'
import carrinhoDeCompras from '../../assets/carrinhoDeCompras.png'
function Cart(){
    return(
        <>
            <div className={styles.pagamento}>
                <CarrinhoButton onClick={onAddItems} items={items} />
            </div>
        </>
    )
}

export default Cart