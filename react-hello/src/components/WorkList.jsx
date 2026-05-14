
function WorkList({works}) {
  return (
    <div>
      <div>{works.length}作品</div>
      <div>
        {
          works.map(work => (
            <div>
              {work.title}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WorkList