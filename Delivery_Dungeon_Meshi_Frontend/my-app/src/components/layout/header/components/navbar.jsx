import { Link } from "react-router-dom";
import styles from './css/navbar.module.css'
function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <Link to="/">Home</Link>
                <Link to="/cardapio">Cardápio</Link>
            </div>
        </>
    )
}

export default Navbar