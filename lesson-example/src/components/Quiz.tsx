import { useState } from "react";

const Quiz = ({ question, onComplete }) => {
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (selected === question.answer) {
      setFeedback("✅ Corretto!");
      onComplete();
    } else {
      setFeedback("❌ Riprova!");
    }
  };

  return (
    <div className="space-y-3">
      <p className="font-medium">{question.text}</p>
      {question.options.map((opt, i) => (
        <label key={i} className="block">
          <input
            type="radio"
            name="quiz"
            value={opt}
            checked={selected === opt}
            onChange={(e) => setSelected(e.target.value)}
            className="mr-2"
          />
          {opt}
        </label>
      ))}
      <button
        onClick={checkAnswer}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Conferma
      </button>
      {feedback && <p className="mt-2">{feedback}</p>}
    </div>
  );
};

export default Quiz;
