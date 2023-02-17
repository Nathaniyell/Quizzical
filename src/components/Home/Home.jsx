import React, { useState, useEffect } from 'react';
import blob5 from '../assets/blob5.svg';
import blobs from '../assets/blobs.svg';
import styles from './home.module.css';
import QuizQuestions from '../QuizPage/Quizquestions';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [quizzes, setQuizzes] = useState([]);

  const getQuiz = () => {
    fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
      .then(res => res.json())
      .then(data => {
        const result = data.results;
        setQuizzes(result);
      })
      .catch(error => {
        console.log("Error fetching quizzes:", error);
        setQuizzes([]);
      });
  };

  useEffect(() => {
    if (isLoaded) {
      getQuiz();
    }
  }, [isLoaded]);

  function startQuiz() {
    setIsLoaded(true);
  }

  return (
    <div className={styles.home}>
      {isLoaded ? (
        <QuizQuestions quizQ={quizzes} />
      ) : (
        <div className={styles.blop}>
          <img src={blob5} alt='blop' className={styles.blop1} />
          <img src={blobs} alt='blop' className={styles.blop2} />
          <div className={styles.body}>
            <h1>Quizzical</h1>
            <p>Test your knowledge on different topics</p>
            <button type="button" onClick={startQuiz}>Start quiz</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;


