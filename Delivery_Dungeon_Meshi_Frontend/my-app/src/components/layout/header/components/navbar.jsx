import styles from "./css/navbar.module.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <div className={styles.navContainer}>
                <button className={styles.navBtn} onClick={() => navigate("/")}>Home</button>
                <button className={styles.navBtn} onClick={() => navigate("/cardapio")}>Cardápio</button>
            </div>
        </>
    )
}

export default Navbar