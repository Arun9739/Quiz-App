
import './App.css';

import React, { useState } from 'react';

function App() {
  const questions = [
    {
      questionText : 'Name the captain who led India to win 2013 Champions Trophy?',
      answerOptions : [
        {answerText : 'Sachin Tendulkar', isCorrect : false},
        {answerText : 'M S Dhoni', isCorrect : true},
        {answerText : 'Virat Kohli', isCorrect : false},
        {answerText : 'Rohit Sharma', isCorrect : false},
      ],
    },
    {
      questionText : 'Which is the smallest country in the world?',
      answerOptions : [
        {answerText : 'Monaco', isCorrect : false},
        {answerText : 'Nauru', isCorrect : false},
        {answerText : 'Vatican city', isCorrect : true},
        {answerText : 'San marino', isCorrect : false},
      ],
    },
    {
      questionText : 'Silent valley project is related to which state?',
      answerOptions : [
        {answerText : 'Kerala', isCorrect : true},
        {answerText : 'Karnataka', isCorrect : false},
        {answerText : 'Uttar Pradesh', isCorrect : false},
        {answerText : 'Tamilnadu', isCorrect : false},
      ],
    },
    {
      questionText : 'How long does it take Uranus to orbit the Sun?',
      answerOptions : [
        {answerText : '45 years', isCorrect : false},
        {answerText : '94 years', isCorrect : false},
        {answerText : '25 years', isCorrect : false},
        {answerText : '84 years', isCorrect : true},
      ],
    },
    {
      questionText : 'Which of the following is a programming language?',
      answerOptions : [
        {answerText : 'JetBrains', isCorrect : false},
        {answerText : 'Kotlin', isCorrect : true},
        {answerText : 'Netbeans', isCorrect : false},
        {answerText : 'API', isCorrect : false},
      ],
    },
    {
      questionText : 'Which veto power does the President of India have?',
      answerOptions : [
        {answerText : 'Suspended prohibition', isCorrect : false},
        {answerText : 'Complete prohibition', isCorrect : false},
        {answerText : 'Pocket', isCorrect : false},
        {answerText : 'All of these', isCorrect : true},
      ],
    },
    {
      questionText : 'Who got first Oscar award in India?',
      answerOptions : [
        {answerText : 'Anil Kapoor', isCorrect : false},
        {answerText : 'Bhanu Athiya', isCorrect : true},
        {answerText : 'AR Rahman', isCorrect : false},
        {answerText : 'Sri devi', isCorrect : false},
      ],
    },
    {
      questionText : 'Which country has won the most gold medals in Modern Olymics?',
      answerOptions : [
        {answerText : 'China', isCorrect : false},
        {answerText : 'USA', isCorrect : true},
        {answerText : 'Russia', isCorrect : false},
        {answerText : 'Australia', isCorrect : false},
      ],
    },
    {
      questionText : 'According to Mahabharata, who is the father of Nakula?',
      answerOptions : [
        {answerText : 'Pandu', isCorrect : true},
        {answerText : 'Bhishma', isCorrect : false},
        {answerText : 'Bhima', isCorrect : false},
        {answerText : 'Arjun', isCorrect : false},
      ],
    },
    {
      questionText : 'Which king was known for his military campaign and for being patron of arts and literature during 4th century B.C ?',
      answerOptions : [
        {answerText : 'Ashok', isCorrect : false},
        {answerText : 'Harshvardhan', isCorrect : false},
        {answerText : 'Bappa Raval', isCorrect : false},
        {answerText : 'Chandragupta Maurya', isCorrect : true},
      ],
    },
  ];

  const[currentQuestion, setCurrentQuestion] = useState(0);
  const[showScore, setShowScore] = useState(false);
  const[score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect){
      setScore(score+1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
  }

  return (
    <div className='app'>
      
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of the {questions.length}
        </div>
      
      ) : (
          <>
            <div className='question-section'>
              
              <div className='question-count'>
                <span>{currentQuestion + 1}</span>/{questions.length}
              </div>

              <div className='question-text'>
                {questions[currentQuestion].questionText}
              </div>

              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
              </div>
            </div>
          </>
      
        )
      }
    </div>
  );
}

export default App;
