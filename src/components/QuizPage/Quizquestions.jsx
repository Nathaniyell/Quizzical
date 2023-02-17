import React, { useState } from 'react';
import styles from "./Quizquestions.module.css";

const QuizQuestions = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <section className={styles.section}>
    <div className={styles["quiz-container"]}>
      {props.quizQ.map((quiz, index) => (
        <div key={index}>
          <h3 className={styles.question}>{quiz.question}</h3>
          <ul className={styles.answers}>
            {[...quiz.incorrect_answers, quiz.correct_answer].map((answer, index) => (
              <li
                key={index}
                className={` ${styles.answer} ${selectedAnswer === answer ? styles.selected : ''}`}
                onClick={() => handleAnswerClick(answer)}
              >
                {answer}
              </li>
            ))}
          </ul>
         
        </div>
      ))}
    </div>
       <button type='button' className={styles.btn}>Check Answers</button>
      </section>
  );
};

export default QuizQuestions;
