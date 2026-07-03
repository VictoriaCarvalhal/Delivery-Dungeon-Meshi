import CartButton from './components/cartButton'
import Logo from './components/logo'
import Navbar from './components/navbar'
import styles from './header.module.css'
function Header() {
    return (
        <>
            <div className={styles.header}>
                <Logo/>
                <Navbar/>
                <CartButton/>
            </div>
        </>
    );
}

export default Header;