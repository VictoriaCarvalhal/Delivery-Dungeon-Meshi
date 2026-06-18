import { useState, useEffect } from 'react';
import MockPedidos from '../mocks/mockPedidos.json'

export function usePratos() {
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPratos(MockPedidos);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return { pedidos, loading };
}