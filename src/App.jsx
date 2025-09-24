import "./styles.css";
import questions from "./constants/questions.json";
import Question from "./components/question";
import Result from "./components/Result";

import { useState } from "react";
export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const handleNextQuestion = (isCorrect) => {
    setUserAnswers([...userAnswers, isCorrect]);
    setCurrentQuestion(currentQuestion + 1);
  };
  const restQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };
  return (
    <div className="App">
      <h1>World Quiz</h1>
      {/* questions compnent*/}
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {/* Result Component */}

      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          question={questions}
          restQuiz={restQuiz}
        />
      )}
    </div>
  );
}
