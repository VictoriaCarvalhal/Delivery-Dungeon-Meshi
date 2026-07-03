import styles from './css/carrinhoButton.module.css';
import "foundation-icons/foundation-icons.css";
import {Link} from 'react-router-dom'
function CarrinhoButton({items}) {
    return (
        <div className={styles.carrinhoButton}>
            <Link to="/carrinho">
                <span className={styles.badge}>{items}</span>
                <i className="fi-shopping-cart"></i>
            </Link>
        </div>
    )
}

export default CarrinhoButton