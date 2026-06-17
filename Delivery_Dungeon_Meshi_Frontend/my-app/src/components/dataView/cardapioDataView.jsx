import {usePratos} from '../hooks/usePratos'
import PratoCard from "../card/pratoCard"
import { useItemContext } from '../../context/itemContext'
function CardapioDataView() {
    const {onAddItems} = useItemContext();
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
                            valor={prato.valor}
                            onSmash={onAddItems}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default CardapioDataView