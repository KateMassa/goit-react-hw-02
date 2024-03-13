const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <h2>Feedback Summary</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
