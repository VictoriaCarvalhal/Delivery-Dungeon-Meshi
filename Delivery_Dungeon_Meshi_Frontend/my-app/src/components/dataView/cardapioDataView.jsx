import PratoCard from "../card/pratoCard"
function CardapioDataView({onAddItem}) {
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