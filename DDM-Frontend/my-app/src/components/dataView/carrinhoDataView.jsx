import PedidoCard from '../card/pedidoCard'
import { usePedidoContext } from '../../context/pedidoContext';
import { useNavigate } from "react-router-dom";
function CarrinhoDataView() {
    const { removerPedido, pedidos, conta, items } = usePedidoContext();
    const navigate = useNavigate();

    function onHandleClick(){
        if(items > 0){
            navigate("/confirmacaoCompra");
        }
        else{
            alert("Não é possível finalizar compra. Você não adicionou nenhum prato no seu carrinho.");
        }
    }
    return (
        <>
            <div>
                {pedidos.map((pedido) => (
                    <PedidoCard
                        key={pedido.id_pedido}
                        nome={pedido.prato.nome}
                        desc={pedido.prato.desc}
                        quant={pedido.quant}
                        valor_unit={pedido.prato.valor_unit}
                        valor_total={pedido.valor_total_pedido}
                        onSmash={() => removerPedido(pedido)}
                    />
                ))}
            </div>
            <div>Sua conta é: R${conta}</div>
            <div><button onClick={onHandleClick}>Finalizar Compra</button></div>
        </>
    )
}

export default CarrinhoDataView