import restaurantLogo from '../assets/restaurantLogo.png'
import carrinhoDeCompras from '../assets/carrinhoDeCompras.png'
import { useState } from 'react';
import './css/header.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function Header() {
    const [itemsCarrinho, setItemsCarrinho] = useState(0);
    let navigate = useNavigate();

    return (
        <>
            <div className="header">
                <Link to="/"><img id="logo" src={restaurantLogo} alt="Logo do site" /></Link>

                <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
                <button className="nav-btn" onClick={() => navigate("/cardapio")}>Cardápio</button>

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