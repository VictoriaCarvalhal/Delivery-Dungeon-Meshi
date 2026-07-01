import { Outlet } from "react-router-dom";
import { Header } from "./header/header"
import { Sidebar } from "./sidebar/sidebar"

function Layout(){
    return (
        <>
            <Header/>
            <div className="content-wrapper">
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