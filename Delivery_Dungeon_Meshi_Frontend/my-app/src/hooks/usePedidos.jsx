import { useState, useEffect } from 'react';
import MockPedidos from '../mocks/mockPedidos.json'

export function usePedidos() {
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPedidos(MockPedidos);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return { pedidos, loading };
}