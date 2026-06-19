import PedidoCard from '../card/pedidoCard'
import { usePedidoContext } from '../../context/pedidoContext';
import { useNavigate } from "react-router-dom";
function CarrinhoDataView() {
    const {onRemoverPedidoDaComanda, comanda, conta, items} = usePedidoContext();
    const navigate = useNavigate();

    function onHandleClick(){
        if(items > 0){
            navigate("/confirmacaoCompra");
        }
        else{
            alert("Nao é possível finalizar compra. Você não adicionou nenhum prato no seu carrinho.");
        }
    }
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
            <div><button onClick={onHandleClick}>Finalizar Compra</button></div>
        </>
    )
}

export default CarrinhoDataView