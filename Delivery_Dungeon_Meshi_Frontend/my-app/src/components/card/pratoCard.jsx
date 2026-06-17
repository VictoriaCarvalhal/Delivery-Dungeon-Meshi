
function PratoCard({name,desc,valor,onSmash}) {
    return (
        <>
            <div>
                <span>{name}</span>
                <span>{desc}</span>
                <sapn>{valor}</sapn>
                <button onClick={onSmash}>Adicionar</button>
            </div>
        </>
    )
}

export default PratoCard