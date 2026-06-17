function CarrinhoButton({onClick,children}) {
    return (
        <>
            <button onClick={onClick}>
               {children}
            </button>
        </>
    )
}

export default CarrinhoButton