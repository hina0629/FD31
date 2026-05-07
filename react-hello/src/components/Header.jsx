// rfce
import styles from './Header.module.css'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.title}>Anime Station</div>
    </header>
  )
}

export default Header