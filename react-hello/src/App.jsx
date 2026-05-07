import styles from './App.module.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Anime Station</h2>
        <div>ここになんか作品</div>
      </main>

      <Footer />
    </div>
  )
}

export default App

// npm run build でビルド
// dist というフォルダができるからそれを公開すればOK

// vite.config.js viteの設定