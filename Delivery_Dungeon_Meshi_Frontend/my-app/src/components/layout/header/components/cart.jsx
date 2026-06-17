import styles from './css/cart.module.css'
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