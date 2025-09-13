import { useState } from "react";
import VocabularyList from "./VocabularyList";
import Quiz from "./Quiz";

const LessonCard = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);

  const vocab = [
    { it: "Ciao", fr: "Salut", en: "Hello" },
    { it: "Mi chiamo...", fr: "Je m’appelle...", en: "My name is..." },
    { it: "Come stai?", fr: "Comment ça va?", en: "How are you?" },
  ];

  const question = {
    text: "Come si dice 'My name is' in francese?",
    options: ["Je suis...", "Je m’appelle...", "Mon nom est..."],
    answer: "Je m’appelle..."
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Lezione A1: Presentazioni
      </h1>

      <p className="mb-4 text-gray-600 dark:text-gray-300">
        In questa lezione imparerai a presentarti in italiano e francese.
      </p>

      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        Vocabolario chiave
      </h2>
      <VocabularyList vocab={vocab} />

      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-100">
        Mini Quiz
      </h2>
      <Quiz
        question={question}
        onComplete={() => setQuizCompleted(true)}
      />

      {quizCompleted && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
          🎉 Ottimo lavoro! Hai completato la lezione.
        </div>
      )}
    </div>
  );
};

export default LessonCard;
