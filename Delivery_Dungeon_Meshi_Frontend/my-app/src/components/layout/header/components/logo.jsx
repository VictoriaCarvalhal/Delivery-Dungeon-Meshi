import restaurantLogo from '../../../../assets/restaurantLogo.png'
import { Link } from 'react-router-dom';
import styles from './css/logo.module.css'
function Logo(){
    return(
        <div className={styles.logo}>
                <Link to="/">
                <img src={restaurantLogo} alt="Logo do site" />
            </Link>
        </div>
    )
}

export default Logo