
function PratoCard({name,desc,valor,onSmash}) {
    return (
        <>
            <div>
                <span>Nome:{name} Desc: {desc} Valor: {valor}</span>
                <button onClick={onSmash}>Adicionar</button>
            </div>
        </>
    )
}

export default PratoCard