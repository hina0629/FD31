import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React</h1>
    </>
  )
}

export default App

// npm run build でビルド
// dist というフォルダができるからそれを公開すればOK

// vite.config.js viteの設定