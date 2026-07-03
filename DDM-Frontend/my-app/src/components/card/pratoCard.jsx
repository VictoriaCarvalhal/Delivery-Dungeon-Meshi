
function PratoCard({name,desc,valor,onSmash}) {
    return (
        <>
            <div>
                <span>Nome:{name} Desc: {desc} Valor: {valor}</span>
                <button onClick={() => onSmash({name, desc, valor})}>Adicionar</button>
            </div>
        </>
    )
}

export default PratoCard