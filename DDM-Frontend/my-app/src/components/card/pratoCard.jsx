function PratoCard({nome, desc, valor_unit, onSmash}) {
    return (
        <>
            <div>
                <span>Nome:{nome} Desc: {desc} Valor: {valor_unit}</span>
                <button onClick={onSmash}>Adicionar</button>
            </div>
        </>
    )
}

export default PratoCard