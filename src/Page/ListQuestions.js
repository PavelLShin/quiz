import styles from './ListQuestion.module.css'

function ListQuestions({ question, clickBtn, scale }) {
  return (
    <div className={styles.wrapper}>
      <div style={{ width: `${scale}%` }} className={styles.progress}></div>
      <h1>{question.title}</h1>
      <div className={styles.list}>
        {question.variants.map((el, id) => {
          return (
            <h3 key={id} onClick={() => clickBtn(id)}>
              {el}
            </h3>
          )
        })}
      </div>
    </div>
  )
}

export default ListQuestions
