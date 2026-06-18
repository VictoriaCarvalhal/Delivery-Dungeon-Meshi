import PedidoCard from '../card/pedidoCard'
import { usePedidoContext } from '../../context/pedidoConte xt';
function CarrinhoDataView() {
    const {onRemovePedido} = usePedidoContext();
    
    return (
        <>
            <div>
                {pedidos.map((pedido) => (
                    <PedidoCard
                        key={}
                        name={}
                        desc={}
                        quant={}
                        valor={}
                        onSmash={onRemoveItems}
                    />
                ))}
            </div>
        </>
    )
}

export default CarrinhoDataView