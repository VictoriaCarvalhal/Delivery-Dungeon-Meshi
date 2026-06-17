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

    return (
        <>
            <ItemContext.Provider value={{items,onAddItems}}>
                {children}
            </ItemContext.Provider>
        </>
    )
}