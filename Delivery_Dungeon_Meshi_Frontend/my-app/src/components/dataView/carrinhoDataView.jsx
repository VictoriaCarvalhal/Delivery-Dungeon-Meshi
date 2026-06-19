import PedidoCard from '../card/pedidoCard'
import { usePedidoContext } from '../../context/pedidoConte xt';
function CarrinhoDataView() {
    const {onRemovePedido} = usePedidoContext();
    const {comanda} = usePedidoContext();
    
    return (
        <>
            <div>
                {comanda.map((pedido) => (
                    <PedidoCard
                        key={pedido.id}
                        name={pedido.name}
                        desc={pedido.desc}
                        quant={pedido.quant}
                        valor={pedido.valorUni}
                        onSmash={onRemovePedido}
                    />
                ))}
            </div>
        </>
    )
}

export default CarrinhoDataView