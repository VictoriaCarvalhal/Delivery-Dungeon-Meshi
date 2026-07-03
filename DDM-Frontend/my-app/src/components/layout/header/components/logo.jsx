import logoHover from '../../../../assets/restaurantLogoHoverCorAlternativa.png'
import { Link } from 'react-router-dom';
import styles from './css/logo.module.css'

function Logo() {

    return (
        <div className={styles.logo}>
            <Link to="/">
                <img
                    src={logoHover} 
                    alt="Logo do restaurante"
                />
            </Link>
        </div>
    )
}

export default Logo;