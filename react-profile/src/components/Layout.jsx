function Layout({ children, onNavigate }) {
  return (
    <div>
      <header>
        <h1>サイトタイトル</h1>

        <nav>
          {/* aタグよりbuttonタグ推奨 */}
          <button onClick={() => onNavigate('home')}>Home</button>
          <button onClick={() => onNavigate('about')}>About</button>
        </nav>
      </header>

      <main>
        { children }
      </main>

      <footer>
        <p>&copy; 2026 My App</p>
      </footer>
    </div>
  )
}

export default Layout
