import styles from "./Layout.module.css";
import { Home, Info, Sparkles, BadgeCheck } from "lucide-react";

function Layout({ children, onNavigate }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.brand}>
          <Sparkles size={24} className={styles.brandIcon}/>
          サイトタイトル
        </h1>

        <nav className={styles.nav}>
          {/* aタグよりbuttonタグ推奨 */}
          <button onClick={() => onNavigate('home')} className={styles.navButton}>
            <Home size={20}/>
            Home
          </button>
          <button onClick={() => onNavigate('about')} className={styles.navButton}>
            <Info size={20}/>
            About
            </button>
        </nav>
      </header>

      <main className={styles.main}>
        { children }
      </main>

      <footer className={styles.footer}>
        <p>
          <BadgeCheck size={16} aria-hidden="true"/>
          2026 My App
        </p>
      </footer>
    </div>
  )
}

export default Layout
