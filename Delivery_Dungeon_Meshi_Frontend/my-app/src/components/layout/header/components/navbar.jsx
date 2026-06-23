import { useNavigate } from "react-router-dom";
import styles from './css/navbar.module.css'
function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.navbar}>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/cardapio")}>Cardápio</button>
            </div>
        </>
    )
}

export default Navbar