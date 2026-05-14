import styles from './WorkCard.module.css'

function WorkCard({ work, onSelect }) {
  return (
    <div className={styles.card} key={work.id} onClick={() => onSelect(work)}>
      {/* keyを入れないと、表示はされるけどエラーが出る */}
      {/* 画像 */}
      <div className={styles.thumbnailWrapper}>
        <img className={styles.thumbnail} src={work.image} alt={work.title} />
      </div>

      {/* 作品の情報 */}
      <div className={styles.body}>
        {/* 作品のメタ情報 */}
        <div className={styles.meta}>
          <span className={styles.genre}>{work.genre}</span>
          <span className={styles.year}>{work.year}</span>
        </div>

        <h2 className={styles.title}>{work.title}</h2>
        <p className={styles.description}>{work.description}</p>
      </div>
    </div>
  )
}

export default WorkCard