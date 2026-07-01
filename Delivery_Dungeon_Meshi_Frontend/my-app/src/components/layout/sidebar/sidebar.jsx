// import styles from './sidebar.module.css'
import {useLocation} from 'react-router-dom';

const sidebarContent = {
    '/': {
        left: 'Sidebar Menu Esquerdo - Home',
        right: 'Sidebar Menu Direito - Home',
    },
    '/cardapio':{
        left: 'Sidebar Menu Esquerdo - Cardápio',
        right: 'Sidebar Menu Direito - Cardápio',
    },
    '/carrinho':{
        left: 'Sidebar Menu Esquerdo - Carrinho',
        right: 'Sidebar Menu Direito - Carrinho',
    },
    '/confirmacaoCompra':{
        left: 'Sidebar Menu Esquerdo - Confirmacao Compra',
        right: 'Sidebar Menu Direito - Confirmacao Compra',
    },
}


function Sidebar({side}) {
    const { pathname } = useLocation();
    const text = sidebarContent[pathname]?.[side] || `Sidebar ${side}`;
    return (
        <aside className={`sidebar sidebar-${side}`}>
            <p>{text}</p>
        </aside>
    );
}

export default Sidebar