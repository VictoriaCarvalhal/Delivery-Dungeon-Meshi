import { createContext, useContext, useState } from 'react';

const ItemContext = createContext();

export function useItemContext(){
    return useContext(ItemContext);
}
export function ItemProvider({ children }) {
    const [items,setItems] = useState(0);

    function onAddItems() {
        setItems(items + 1);
    }

    const decrementarSemNegativos = (quantidade) => Math.max(0, quantidade - 1);

    function onRemoveItems(){
        setItems(decrementarSemNegativos);
    }
    
    return (
        <>
            <ItemContext.Provider value={{items,onAddItems,onRemoveItems}}>
                {children}
            </ItemContext.Provider>
        </>
    )
}