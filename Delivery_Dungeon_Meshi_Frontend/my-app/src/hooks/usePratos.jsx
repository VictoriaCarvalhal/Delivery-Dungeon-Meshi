import { useState, useEffect } from 'react';
import { MockPratos } from '../mocks/mockPratos.json'

export function usePratos() {
    const [pratos, setPratos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() =>{
            setPratos(MockPratos); 
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    },[]);

    return {pratos,loading};
}