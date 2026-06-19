import restaurantLogo from '../../../../assets/restaurantLogo.png'
import { Link } from 'react-router-dom';
function Logo(){
    return(
        <>
            <Link to="/">
                <img src={restaurantLogo} alt="Logo do site" />
            </Link>
        </>
    )
}

export default Logo