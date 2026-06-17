

function PratoCard({name,desc,onAddItem}) {
    return (
        <>
            <div>
                <span>{name}</span>
                <span>{desc}</span>
                <button onClick={onAddItem}>Adicionar</button>
            </div>
        </>
    )
}

export default PratoCard