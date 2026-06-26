import styles from './css/carrinhoButton.module.css';
import "foundation-icons/foundation-icons.css";

function CarrinhoButton({onSmash, items }) {
    return (
        <div className={styles.carrinhoButton}>
            <button onClick={onSmash}>
                <span className={styles.badge}>{items}</span>
                <i className="fi-shopping-cart"></i>
            </button>
        </div>
    
    )
}

export default CarrinhoButton