function Layout({ children }) {
  return (
    <div>
      <header>
        <h1>サイトタイトル</h1>
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
