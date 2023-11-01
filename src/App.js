import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0); // Use state to track total marks
  const [displayQuestion, setDisplayQuestion] = useState(true); // Use state to control whether to display questions

  const questions = [
    {
      question: "What is Laravel?",
      answer: "framework",
      options: ["programming language", "framework", "library", "CMS"],
    },
    {
      question: "HTML stands for?",
      answer: "hyper text markup language",
      options: [
        "hyper text",
        "hyper text master language",
        "hyper text markup language",
        "hyper text markup line",
      ],
    },
    {
      question: "What is SQL?",
      answer: "Database",
      options: ["programming language", "Database", "framework", "library"],
    },
  ];

  function answerClick(val) {
    if (questions[counter]["answer"] === questions[counter]["options"][val]) {
      setTotalMarks(totalMarks + 100);
    }

    if (counter + 1 < questions.length) {
      setCounter(counter + 1);
    } else {
      setDisplayQuestion(false); // Hide questions after completing the quiz
    }
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {displayQuestion ? (
        <>
          <h2>
            Questions {counter + 1}/{questions.length}
          </h2>
          <p>{questions[counter].question}</p>
          {questions[counter]["options"].map((val, i) => {
            return (
              <div key={i}>
                <button onClick={() => answerClick(i)}>{val}</button>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h2>Your Marks {totalMarks}</h2>
          <p>Congratulations, you have completed the quiz!</p>
        </>
      )}
    </div>
  );
}

export default App;
