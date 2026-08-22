import {usePratos} from '../../hooks/usePratos'
import PratoCard from "../card/pratoCard"
import { usePedidoContext } from '../../context/pedidoContext';
function CardapioDataView() {
    const { adicionarPedido } = usePedidoContext();
    const {pratos, loading} = usePratos();

    if (loading){
        return <p>Preparando banquete com o Senshi...</p>;
    }
    else{
        return (
            <>
                <div>
                    {pratos.map((prato) => (
                        <PratoCard
                            key={prato.id_prato}
                            nome={prato.nome}
                            desc={prato.desc}
                            valor_unit={prato.valor_unit}
                            onSmash={() => adicionarPedido(prato)}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default CardapioDataView