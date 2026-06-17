
function PratoCard({name,desc,onSmash}) {
    return (
        <>
            <div>
                <span>{name}</span>
                <span>{desc}</span>
                <button onClick={onSmash}>Adicionar</button>
            </div>
        </>
    )
}

export default PratoCard