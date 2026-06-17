import styles from './header.module.css';
import Cart from './components/cart'
import Logo from './components/logo'
import Navbar from './components/navbar'
function Header() {
    return (
        <>
            <div className={styles.header}>
                <Logo/>
                <Navbar/>
                <Cart/>
            </div>
        </>
    );
}

export default Header