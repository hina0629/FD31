import styles from "./App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";
import WorkList from "./components/WorkList";
// モックデータの読み込み
// {} 名前付きエクスポート（defaultがないやつ）の時に必要
import { works } from "./data/works";
// useStateをインポート
import { useState } from "react";

function App() {
  // selectedWork：状態を管理するための変数
  // useStateにデフォルト値を付けたいときは()の中に書く
  // 入れ物を作った
  // 代入するときに＝は使ってはいけないからsetSelectedWork
  const [selectedWork, setSelectedWork] = useState(null);
  const [query, setQuery] = useState("");

  // 全作品worksから title を検索キーワード query でリアルタイム検索
  const filteredWorks = works.filter((work) => work.title.includes(query))

  return (
    <div className={styles.app}>
      <Header />

      <SearchBar query={query} onQueryChange={setQuery} />

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>作品リスト</h2>
        {/* <div>ここになんか作品</div> */}
        <WorkList works={filteredWorks} onSelect={(work) => setSelectedWork(work)} />
        {/* {...works} でも可能 */}
      </main>

      <Footer />

      {/* selectedWorkがあればモーダルを表示 */}
      {selectedWork && (
        <Modal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </div>
  );
}

export default App;

// npm run build でビルド
// dist というフォルダができるからそれを公開すればOK

// vite.config.js viteの設定
