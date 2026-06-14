import restaurantLogo from '../assets/restaurantLogo.png'
import carrinhoDeCompras from '../assets/carrinhoDeCompras.png'
import { useState } from 'react';
import './css/header.css'

function Header() {
    const [itemsCarrinho, setItemsCarrinho] = useState(0);

    return (
        <>
            <div className="header">
                <img id="logo" src={restaurantLogo} alt="Logo do site" />

                <button className="nav-btn">Home</button>
                <button className="nav-btn">Cardápio</button>

                <div className="pagamento">
                    <a id="carrinho" href="#">
                        <span id="items">{itemsCarrinho}</span>
                        <img src={carrinhoDeCompras} alt="Carrinho de Compras" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header