import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

function useWorks() {
  // 作品を管理するための状態
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // コンポーネントが初回読み込まれたときに
  useEffect(() => {
    // APIサーバから作品データを取得
    async function fetchWorks() {
      try {
        // json-server にAPIリクエスト
        // このままだとハードコーディング
        // const response = await fetch('http://localhost:3001/works')
        const response = await fetch(`${API_URL}/works`)
        // jsonをjsオブジェクトに変換
        const data = await response.json()
        // 作品データを状態に保存
        setWorks(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    // 作品データを取得する関数実行
    fetchWorks()
  }, [])

  // 作品データを返す
  return { works, loading, error }
}

export default useWorks