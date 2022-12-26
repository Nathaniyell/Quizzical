import React, { useState, useEffect } from 'react'
import blob5 from '../assets/blob5.svg'
import blobs from '../assets/blobs.svg'
import styles from './home.module.css'


const Home = () => {
  const [questions, setQuestions] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)


  const getQuiz = () => {
    fetch("https://opentdb.com/api.php?amount=1&category=18&type=multiple")
      .then(res => res.json())
      .then(data => setQuestions([data]))
  }
  useEffect(() => {
    getQuiz()
  }, [])
  let result;
  function startQuiz() {
    if (questions.length !== 0) {
      result = questions[0].results[0]

    // setIsLoaded(true)
      console.log(result)
    const { question } = result
    const quizElem = result.map(ques => {
      return <div>question</div>
      console.log(question)
    })
    }

    // console.log("The final log" + questions)


  }







  return (
    <div className={styles.home}>
      {!isLoaded ? (
        <div className={styles.blop}>
          <img src={blob5} alt='blop' className={styles.blop1} />
          <img src={blobs} alt='blop' className={styles.blop2} />
          <div className={styles.body}>
            <h1>Quizzical</h1>
            <p>Test your knowledge on different Topics</p>
            <button typeof="button" onClick={startQuiz}>Start quiz</button>
          </div>
        </div>
      ) : '' }

    </div>
  )
}

export default Home