import styles from "./Layout.module.css";

function Layout({ children, onNavigate }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>サイトタイトル</h1>

        <nav className={styles.nav}>
          {/* aタグよりbuttonタグ推奨 */}
          <button onClick={() => onNavigate('home')} className={styles.navButton}>Home</button>
          <button onClick={() => onNavigate('about')} className={styles.navButton}>About</button>
        </nav>
      </header>

      <main className={styles.main}>
        { children }
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 My App</p>
      </footer>
    </div>
  )
}

export default Layout
