function PedidoCard({ name, desc, quant, valor, onSmash }) {
    return (
        <>
            <div>
                <span>{name}</span>
                <span>{desc}</span>
                <span>{quant}</span>
                <span>{valor}</span>
                <button onClick={onSmash}>Remover</button>
            </div>
        </>
    )
}

export default PedidoCard