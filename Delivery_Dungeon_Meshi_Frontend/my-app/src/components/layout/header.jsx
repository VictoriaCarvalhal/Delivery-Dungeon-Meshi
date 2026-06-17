import restaurantLogo from '../../assets/restaurantLogo.png'
import carrinhoDeCompras from '../../assets/carrinhoDeCompras.png'
import styles from './header.module.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import CarrinhoButton from '../button/carrinhoButton'
import {useItemContext} from '../context/itemContext'

function Header() {
    let navigate = useNavigate();
    const {items, onAddItems} = useItemContext();
    return (
        <>
            <div className={styles.header}>
                <Link to="/"><img className={styles.logo} src={restaurantLogo} alt="Logo do site" /></Link>

                <button className={styles.navBtn} onClick={() => navigate("/")}>Home</button>
                <button className={styles.navBtn} onClick={() => navigate("/cardapio")}>Cardápio</button>

                <div className={styles.pagamento}>
                    <CarrinhoButton onClick={onAddItems} items={items} />
                </div>
            </div>
        </>
    );
}

export default Header