function PedidoCard({ nome, desc, quant, valor_unit, valor_total, onSmash }) {
    return (
        <>
            <div>
                <span>Nome: {nome} Desc: {desc} Quant: {quant} ValorUnit: {valor_unit} ValorTotal:{valor_total}</span>
                <button onClick={onSmash}>Remover</button>
            </div>
        </>
    )
}

export default PedidoCard