import restaurantLogo from '../assets/restaurantLogo.png'
import carrinhoDeCompras from '../assets/carrinhoDeCompras.png'
import {useState} from 'react';
import './css/header.css'


const [itemsCarrinho, setItemsCarrinho] = useState(0);
function Header() {
    return (
        <>
            <div className="header">
                <img id="logo" src={restaurantLogo} alt="Logo do site" />
                <button>Home</button>
                <button>Cardapio</button>
                <div className="pagamento">
                    <span id = "items">{itemsCarrinho}</span>
                    <a id="carrinho" href="#"><img src={carrinhoDeCompras} alt="Carrinho de Compras" /></a>
                </div>
            </div>
        </>
    );

}

export default Header