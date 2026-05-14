
function WorkCard({ work, onSelect }) {
  return (
    <div key={work.id} onClick={() => onSelect(work)}>
      {/* keyを入れないと、表示はされるけどエラーが出る */}
      {work.title}
    </div>
  )
}

export default WorkCard