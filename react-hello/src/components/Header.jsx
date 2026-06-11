import styles from './Header.module.css'
import logo from '../assets/logo.svg'
import ThemeButton from './ThemeButton';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.title}>Anime Station</div>
            <ThemeButton />
        </header>
    )
}

export default Header