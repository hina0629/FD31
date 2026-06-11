import styles from "./App.module.css";
import FlashMessage from "./components/Flashmessage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingModal from "./components/LoadingModal";
import Modal from "./components/Modal";
import SearchBar from "./components/SearchBar";
import WorkList from "./components/WorkList";
import { ThemeContext } from "./context/ThemeContext";
// モックデータの読み込み
// {} 名前付きエクスポート（defaultがないやつ）の時に必要
// import { works } from "./data/works";
import useWorks from "./hooks/useWorks";
// useStateをインポート
import { useEffect, useState } from "react";

function App() {
  // カスタムHooksを使って、 works を読み込み
  const { works, loading, error } = useWorks()

    const [ theme, setTheme ] = useState('light');
  
  // selectedWork：状態を管理するための変数
  // useStateにデフォルト値を付けたいときは()の中に書く
  // 入れ物を作った
  // 代入するときに＝は使ってはいけないからsetSelectedWork
  const [selectedWork, setSelectedWork] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState('すべて')

  // ジャンル（純粋なJS）
  const genres = ['すべて', ...new Set(works.map((w) => w.genre))]

  // 全作品worksから title を検索キーワード query でリアルタイム検索
  // const filteredWorks = works.filter((work) => work.title.includes(query))
  const filteredWorks = works
      .filter((w) => selectedGenre === 'すべて' || w.genre === selectedGenre)
      .filter((w) => w.title.includes(query))


  // テーマ切り替え関数
  const toggleTheme = () => {
    // 現在のテーマがライトならダークに、ダークならライトに
    const currentTheme = (theme === 'light') ? 'dark' : 'light'
    // テーマをStateに保存する
    setTheme(currentTheme)
  }

  // useEffect(() => {
    // 何か状態が変わるたびに実行される
  //   console.log('毎回実行')
  // });

  // useEffect(() => {
  //   console.log('初回のみ実行')
  // }, []);

  useEffect(() => {
    console.log('ジャンルが変更されたときに実行')
  }, [selectedGenre]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className={styles.app} data-theme={theme}>
        <LoadingModal isOpen={loading} message="Loading..." />

        <Header />

        <FlashMessage message={error} type="error" />

        <SearchBar query={query} onQueryChange={setQuery} genres={genres} selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />

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
    </ThemeContext.Provider>
  );
}

export default App;

// npm run build でビルド
// dist というフォルダができるからそれを公開すればOK

// vite.config.js viteの設定
