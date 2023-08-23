import questions from '../Questions'
import styles from './ListResult.module.css'

function ListResult({ resetBtn, answer }) {
  return (
    <div className={styles.wrapper}>
      <h1>{` Ваш результат:  ${answer} из ${questions.length}`}</h1>
      <button onClick={resetBtn}>Играть заново</button>
    </div>
  )
}

export default ListResult
