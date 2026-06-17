import restaurantLogo from '../../assets/restaurantLogo.png'
import carrinhoDeCompras from '../../assets/carrinhoDeCompras.png'
import './header.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import {CarrinhoButton} from '../button/carrinhoButton'

function Header({items,onAddItem}) {
    let navigate = useNavigate();

    return (
        <>
            <div className="header">
                <Link to="/"><img id="logo" src={restaurantLogo} alt="Logo do site" /></Link>

                <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
                <button className="nav-btn" onClick={() => navigate("/cardapio")}>Cardápio</button>

                <div className="pagamento">
                    <CarrinhoButton id="carrinho" onClick={onAddItem}>
                        <span id="items">{items}</span>
                        <img src={carrinhoDeCompras} alt="Carrinho de Compras" />
                    </CarrinhoButton>
                </div>
            </div>
        </>
    );
}

export default Header