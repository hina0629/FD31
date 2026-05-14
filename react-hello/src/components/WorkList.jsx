
function WorkList({works}) {
  return (
    <div>
      <div>{works.length}作品</div>
      <div>
        {
          works.map(work => (
            <div key={work.id}>
              {/* keyを入れないと、表示はされるけどエラーが出る */}
              {work.title}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WorkList