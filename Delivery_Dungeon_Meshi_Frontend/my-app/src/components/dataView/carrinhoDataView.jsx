import PedidoCard from '../card/pedidoCard'
import { usePedidoContext } from '../../context/pedidoContext';
function CarrinhoDataView() {
    const {onRemoverPedidoDaComanda, comanda} = usePedidoContext();
    
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
                        onSmash={onRemoverPedidoDaComanda}
                    />
                ))}
            </div>
        </>
    )
}

export default CarrinhoDataView