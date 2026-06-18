import PedidoCard from '../card/pedidoCard'
import { useItemContext } from '../../context/itemContext'
function CarrinhoDataView() {
    const {onRemoveItems} = useItemContext();
    const pedidos = [
        { 
            name: "Roast Basilisk", 
            desc: "A dish made by Senshi", 
            quant: 2,
            valor: 25,
            id: 1 
        },
        {
            name: "Mandrake and Basilisk Omelet",
            desc: "A dish made by Senshi",
            quant: 1,
            valor: 15,
            id: 2

        },
        {
            name: "Living Armor Casserole",
            desc: "A dish made by Senshi",
            quant: 0,
            valor: 40,
            id: 3

        },
    ];
    return (
        <>
            <div>
                {pedidos.map((pedido) => (
                    <PedidoCard
                        key={pedido.id}
                        name={pedido.name}
                        desc={pedido.desc}
                        quant={pedido.quant}
                        valor={pedido.valor}
                        onSmash={onRemoveItems}
                    />
                ))}
            </div>
        </>
    )
}

export default CarrinhoDataView