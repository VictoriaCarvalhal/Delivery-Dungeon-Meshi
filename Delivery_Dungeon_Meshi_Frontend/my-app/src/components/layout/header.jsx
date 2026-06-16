import restaurantLogo from '../../assets/restaurantLogo.png'
import carrinhoDeCompras from '../../assets/carrinhoDeCompras.png'
import './header.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function Header({items}) {
    let navigate = useNavigate();

    return (
        <>
            <div className="header">
                <Link to="/"><img id="logo" src={restaurantLogo} alt="Logo do site" /></Link>

                <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
                <button className="nav-btn" onClick={() => navigate("/cardapio")}>Cardápio</button>

                <div className="pagamento">
                    <a id="carrinho" href="#">
                        <span id="items">{items}</span>
                        <img src={carrinhoDeCompras} alt="Carrinho de Compras" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header