import restaurantLogo from '../assets/restaurantLogo.png'
import carrinhoDeCompras from '../assets/carrinhoDeCompras.png'
import './css/header.css'

function Header() {
    return (
        <>
            <div className="header">
                <img id="logo" src={restaurantLogo} alt="Logo do site" />
                <button>Home</button>
                <button>Cardapio</button>
                <a id="carrinho" href="#"><img src={carrinhoDeCompras} alt="Carrinho de Compras"/></a>
            </div>
        </>
    );

}

export default Header