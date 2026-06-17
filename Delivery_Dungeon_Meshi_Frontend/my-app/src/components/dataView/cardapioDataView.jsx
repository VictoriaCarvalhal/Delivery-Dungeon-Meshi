import PratoCard from "../card/pratoCard"
import { ItemContext } from '../context/itemContext'
import { useContext } from 'react';
function CardapioDataView() {
    const {onAddItem} = useContext(ItemContext);
    const pratos = [
        { name: "Roast Basilisk", desc:"A dish made by Senshi", id:1 },
        { name: "Mandrake and Basilisk Omelet", desc: "A dish made by Senshi", id: 2 },
        { name: "Living Armor Casserole", desc: "A dish made by Senshi", id: 3 },
    ];

    return (
        <>
            <div>
                {pratos.map((prato) =>(
                    <PratoCard
                        key={prato.id}
                        name={prato.name}
                        desc={prato.desc}
                        onClick={onAddItem}
                    />
                ))}
            </div>
        </>
    )
}

export default CardapioDataView