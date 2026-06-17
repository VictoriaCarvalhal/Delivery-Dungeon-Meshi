import styles from "./css/navbar.module.css"
function Navbar() {
    return (
        <>
            <div>
                <button className={styles.navBtn} onClick={() => navigate("/")}>Home</button>
                <button className={styles.navBtn} onClick={() => navigate("/cardapio")}>Cardápio</button>
            </div>
        </>
    )
}

export default Navbar