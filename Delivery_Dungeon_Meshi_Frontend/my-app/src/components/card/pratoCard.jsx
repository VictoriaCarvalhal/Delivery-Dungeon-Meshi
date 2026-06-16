

function PratoCard({name,desc,onClick}) {
    return (
        <>
            <div>
                <span>{name}</span>
                <span>{desc}</span>
                <button onClick={onClick}>Adicionar</button>
            </div>
        </>
    )
}

export default PratoCard