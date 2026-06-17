import restaurantLogo from '../../assets/restaurantLogo.png'
import styles from './css/logo.module.css';
function Logo(){
    return(
        <>
            <Link to="/">
                <img className={styles.logo} src={restaurantLogo} alt="Logo do site" />
            </Link>
        </>
    )
}

export default Logo