import { Outlet } from "react-router-dom";
import Header from "./header/header"
import Sidebar from "./sidebar/sidebar"
import style from "./layout.module.css"
function Layout(){
    return (
        <>
            <Header/>
            <div className={style.contentWrapper}>
                <Sidebar side="left"/>
                    <main>
                        <Outlet />
                    </main>
                <Sidebar side="right"/>
            </div>
        </>
    );
}

export default Layout;