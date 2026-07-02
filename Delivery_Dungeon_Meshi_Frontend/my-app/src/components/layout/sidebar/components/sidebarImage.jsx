import style from "./sidebarImage.module.css";
import imagemTeste from "../../../../assets/SidebarTeste.jpg";
function SidebarImage() {
    return (
        <>
            <div className={style.bordaImg}>
                <img src={imagemTeste} alt="Um teste para ver se a sidebarfunciona" />
            </div>
        </>
    );
}

export default SidebarImage;