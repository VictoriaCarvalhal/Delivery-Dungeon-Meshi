import { useState } from 'react';
import PratoCard from "../card/pratoCard"
function CardapioDataView() {
    const [items,setItems] = useState(0);
    const pratos = [
        { name: "Roast Basilisk", desc:"A dish made by Senshi", id:1 },
        { name: "Mandrake and Basilisk Omelet", desc: "A dish made by Senshi", id: 2 },
        { name: "Living Armor Casserole", desc: "A dish made by Senshi", id: 3 },
    ];

    function adicionarItems(){
        setItems(items + 1);
    }

    return (
        <>
            <div>
                <span>Items No Carrinho:{items}</span>
            </div>
            <div>
                {pratos.map((prato) =>(
                    <PratoCard
                        key={prato.id}
                        name={prato.name}
                        desc={prato.desc}
                        onClick={adicionarItems}
                    />
                ))}
            </div>
        </>
    )
}

export default CardapioDataView