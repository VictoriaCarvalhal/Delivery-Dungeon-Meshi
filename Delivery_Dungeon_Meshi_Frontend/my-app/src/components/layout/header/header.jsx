import Cart from './components/cart'
import Logo from './components/logo'
import Navbar from './components/navbar'
function Header() {
    return (
        <>
            <div>
                <Logo/>
                <Navbar/>
                <Cart/>
            </div>
        </>
    );
}

export default Header