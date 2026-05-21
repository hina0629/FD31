
function SearchBar({ query, onQueryChange }) {
  return (
    <div>
      <section>
        {/* イベントハンドラー */}
        <input type="text" value={query} onChange={(e) => onQueryChange(e.target.value)} />
      </section>
      <section>
        ジャンル選択
      </section>
    </div>
  )
}

export default SearchBar