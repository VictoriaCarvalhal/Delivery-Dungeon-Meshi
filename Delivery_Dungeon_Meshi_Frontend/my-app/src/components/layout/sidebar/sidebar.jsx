import { useLocation } from 'react-router-dom'
import style from "./sidebar.module.css";

import { SidebarImage } from './components/sidebarImages';

const sidebarContent ={
    '/':{
        left: <SidebarImage/>,
        right: <SidebarImage/>,
    }
}
function Sidebar({side}) {
    const { pathname } = useLocation();
    const content = sidebarContent[pathname]?.[side];

    return (
        <aside className={`${style.Sidebar} ${style[side]}`}>
            {content || <p>Sidebar {side} padrão</p>}
        </aside>
    );
}

export default Sidebar;