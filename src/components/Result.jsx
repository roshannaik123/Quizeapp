const Result = ({ userAnswers, question, restQuiz }) => {
  const correctAnswers = userAnswers.filter((item) => item);
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        you answered {correctAnswers.length}out of{question.length}
      </p>
      <span className="restQuize" onClick={restQuiz}>
        click here to rest the quiz
      </span>
    </div>
  );
};
export default Result;
