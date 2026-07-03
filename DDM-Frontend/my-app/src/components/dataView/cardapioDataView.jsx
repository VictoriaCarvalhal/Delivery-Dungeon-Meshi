import {usePratos} from '../../hooks/usePratos'
import PratoCard from "../card/pratoCard"
import { usePedidoContext } from '../../context/pedidoContext';
function CardapioDataView() {
    const { onAdicionarPedidoNaComanda } = usePedidoContext();
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
                            key={prato.id}
                            name={prato.name}
                            desc={prato.desc}
                            valor={prato.valorUni}
                            onSmash={onAdicionarPedidoNaComanda}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default CardapioDataView