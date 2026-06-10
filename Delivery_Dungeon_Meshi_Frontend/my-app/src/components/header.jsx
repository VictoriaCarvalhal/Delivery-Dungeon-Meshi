import restaurantLogo from '../assets/restaurantLogo.png'

function Header() {
    return (

        <div>
            <h1>Isso é um header</h1>
            <img src={restaurantLogo} alt="Logo do site" width="100" height="50" />
        </div>

    );

}

export default Header