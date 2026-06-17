import styles from './css/menu.module.css';
import { Link } from 'react-router-dom'

function SectionMenu() {
    return (
        <div className={styles.menuSection}>

            {/* ── Título com moldura e ornamentos ── */}
            <div className={styles.menuTitleBlock}>
                <span className={styles.menuOrnament}>❧ ❧ ❧</span>
                <div className={styles.menuTitleFrame}>
                    <h1>Sobre nosso restaurante</h1>
                </div>
                <span className={styles.menuOrnament}>❧ ❧ ❧</span>
            </div>

            {/* ── Conteúdo ── */}
            <div className={styles.menuContent}>
                <p className={styles.menuIntro}>
                    Delivery Dungeon Meshi. Um site inspirado no famoso manga do mesmo nome!
                </p>

                <p className={styles.menuTexto}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit pretium mauris.
                    Quisque eu dolor vitae massa blandit aliquet. In sit amet rutrum mauris. Cras tempus commodo
                    quam, vitae cursus leo consectetur vitae. Morbi viverra pellentesque nisl, vel elementum massa
                    ornare quis. Phasellus ut nunc ac augue varius finibus.
                </p>

                <p className={styles.menuTexto}>
                    Proin feugiat elementum pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus
                    et ultrices posuere cubilia curae; Mauris semper finibus pellentesque. Nullam et neque dolor.
                    Vivamus quis ante aliquam, sagittis mauris et, hendrerit nisi. Pellentesque vehicula eleifend
                    diam. Donec at venenatis nisi. Aliquam in sagittis lectus. Phasellus eget accumsan erat.
                    Praesent a est velit.
                </p>
                <Link className={styles.menuCta} to="/cardapio">Peça agora!</Link>
            </div>

        </div>
    )
}

export default SectionMenu