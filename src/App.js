import './App.css'
import { useState } from 'react'
import questions from './Questions'
import ListQuestions from './Page/ListQuestions'
import ListResult from './Page/ListResult'

function App() {
  const [count, setCount] = useState(0)
  const [answer, setAnswer] = useState(0)

  const question = questions[count]

  const clickBtn = (index) => {
    question.correct === index ? setAnswer(answer + 1) : setAnswer(answer)
    setCount(count + 1)
  }

  const resetBtn = () => {
    setCount(0)
    setAnswer(0)
  }

  const scale = Math.round((count / questions.length) * 100)

  return (
    <div className="App">
      {questions.length > count ? (
        <ListQuestions question={question} clickBtn={clickBtn} scale={scale} />
      ) : (
        <ListResult resetBtn={resetBtn} answer={answer} />
      )}
    </div>
  )
}

export default App
