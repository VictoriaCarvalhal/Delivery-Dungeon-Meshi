function carrinhoButton({onClick,children}) {
    return (
        <>
            <button onClick={onClick}>
               {children}
            </button>
        </>
    )
}

export default carrinhoButton