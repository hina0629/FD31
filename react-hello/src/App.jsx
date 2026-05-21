import styles from './App.module.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Modal from './components/Modal';
import WorkList from './components/WorkList'
// モックデータの読み込み
// {} 名前付きエクスポート（defaultがないやつ）の時に必要
import { works } from './data/works';

function App() {

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>作品リスト</h2>
        {/* <div>ここになんか作品</div> */}
        <WorkList works={works} onSelect={(work) => console.log(work)} />
        {/* {...works} でも可能 */}
      </main>

      <Footer />
      <Modal />
    </div>
  )
}

export default App

// npm run build でビルド
// dist というフォルダができるからそれを公開すればOK

// vite.config.js viteの設定