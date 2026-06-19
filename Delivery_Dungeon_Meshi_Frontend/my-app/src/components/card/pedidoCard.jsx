function PedidoCard({ name, desc, quant, valor, onSmash }) {
    return (
        <>
            <div>
                <span>Nome: {name} Desc: {desc} Quant: {quant} ValorUnit: {valor}</span>
                <button onClick={onSmash}>Remover</button>
            </div>
        </>
    )
}

export default PedidoCard