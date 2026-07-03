function PedidoCard({ name, desc, quant, valor, valorTotal, onSmash }) {
    return (
        <>
            <div>
                <span>Nome: {name} Desc: {desc} Quant: {quant} ValorUnit: {valor} ValorTotal:{valorTotal}</span>
                <button onClick={onSmash}>Remover</button>
            </div>
        </>
    )
}

export default PedidoCard