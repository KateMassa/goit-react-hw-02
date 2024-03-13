import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

const App = () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(initialState);

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback > 0
      ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
      : 0;

  const resetFeedback = () => {
    setFeedback(initialState);
  };

  return (
    <div className="container">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback gathered yet." />
      )}
    </div>
  );
};

export default App;
