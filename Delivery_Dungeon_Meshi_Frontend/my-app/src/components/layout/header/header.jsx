import styles from './header.module.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import {useItemContext} from '../context/itemContext'
import Cart from './components/cart'
import Logo from './components/logo'
import NavBar from './components/navbar'
function Header() {
    let navigate = useNavigate();
    const {items, onAddItems} = useItemContext();
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