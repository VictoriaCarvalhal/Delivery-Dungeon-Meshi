import CarrinhoButton from './carrinhoButton'
import { usePedidoContext } from "../../../../context/pedidoContext"
import { useNavigate } from "react-router-dom"
function Cart(){
    const {items} = usePedidoContext();
    const navigate = useNavigate();
    return(
        <>
            <div>
                <CarrinhoButton onSmash={() => navigate("/carrinho")} items={items} />
            </div>
        </>
    )
}

export default Cart