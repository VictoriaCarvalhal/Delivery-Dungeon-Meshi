import PedidoCard from '../card/pedidoCard'
import { usePedidoContext } from '../../context/pedidoContext';
import { useNavigate } from "react-router-dom";
function CarrinhoDataView() {
    const {onRemoverPedidoDaComanda, comanda, conta} = usePedidoContext();
    const navigate = useNavigate();

    return (
        <>
            <div>
                {comanda.map((pedido) => (
                    <PedidoCard
                        key={pedido.id}
                        name={pedido.name}
                        desc={pedido.desc}
                        quant={pedido.quant}
                        valor={pedido.valueUni}
                        valorTotal={pedido.valueTotal}
                        onSmash={() => onRemoverPedidoDaComanda(pedido)}
                    />
                ))}
            </div>
            <div>Sua conta é: R${conta}</div>
            <div><button onClick={() => navigate("/confimacaoCompra")}>Finalizar Compra</button></div>
        </>
    )
}

export default CarrinhoDataView