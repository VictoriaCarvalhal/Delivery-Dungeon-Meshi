import './css/menu.css'

function Menu(){
    return (
        <div className="menu-section">

            {/* ── Título com moldura e ornamentos ── */}
            <div className="menu-title-block">
                <span className="menu-ornament">❧ ❧ ❧</span>
                <div className="menu-title-frame">
                    <h1>Sobre nosso restaurante</h1>
                </div>
                <span className="menu-ornament">❧ ❧ ❧</span>
            </div>

            {/* ── Conteúdo ── */}
            <div className="menu-content">
                <p className="menu-intro">
                    Delivery Dungeon Meshi. Um site inspirado no famoso manga do mesmo nome! 
                </p>

                <p className="menu-texto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit pretium mauris.
                    Quisque eu dolor vitae massa blandit aliquet. In sit amet rutrum mauris. Cras tempus commodo
                    quam, vitae cursus leo consectetur vitae. Morbi viverra pellentesque nisl, vel elementum massa
                    ornare quis. Phasellus ut nunc ac augue varius finibus.
                </p>

                <p className="menu-texto">
                    Proin feugiat elementum pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia curae; Mauris semper finibus pellentesque. Nullam et neque dolor.
                    Vivamus quis ante aliquam, sagittis mauris et, hendrerit nisi. Pellentesque vehicula eleifend
                    diam. Donec at venenatis nisi. Aliquam in sagittis lectus. Phasellus eget accumsan erat.
                    Praesent a est velit.
                </p>

                <a className="menu-cta" href="#">Peça agora!</a>
            </div>

        </div>
    )
}

export default Menu