import restaurantLogo from '../assets/restaurantLogo.png'
import './css/header.css'

function Header() {
    return (
        <>
            <div class="header">
                <img id="logo" src={restaurantLogo} alt="Logo do site" width="100" height="50" />
                <button>Home</button>
                <button>Cardapio</button>
            </div >
        </>
    );

}

export default Header