import styles from "./Layout.module.css";
import { Home, Info, Sparkles, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

// エイリアス（別名）※やってもいいしやらなくてもいい。コードの見易さ的な
// 最初が大文字だとコンポーネント感が増す
const Motion = motion;

function Layout({ children, onNavigate }) {
  return (
    <div className={styles.wrapper}>
      {/* Motion.header ヘッダーがmotionの対象になるというマーク */}
      <Motion.header
        className={styles.header}
        // アニメーション前の状態
        initial={{ opacity: 0, y: -16 }}
        // アニメーション後の状態
        animate={{ opacity: 1, y: 0 }}
        // アニメーションの速さや動き方
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <h1 className={styles.brand}>
          <Sparkles size={24} className={styles.brandIcon}/>
          サイトタイトル
        </h1>

        <nav className={styles.nav}>
          {/* aタグよりbuttonタグ推奨 */}
          <Motion.button
            onClick={() => onNavigate('home')}
            className={styles.navButton}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 16 }}
            type="button"
          >
            <Home size={20}/>
            Home
          </Motion.button>
          <Motion.button
            onClick={() => onNavigate('about')}
            className={styles.navButton}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 16 }}
            type="button"
          >
            <Info size={20}/>
            About
            </Motion.button>
        </nav>
      </Motion.header>

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
