import Flashcard from "./Flashcard";

const lesson1Flashcards = [
  { front: "Ciao", back: "Good Morning" },
  { front: "Arrivederci", back: "Goodbye" },
  { front: "Come stai?", back: "How are you?" },
];

const LessonFlashcards = ({ addToDeck }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {lesson1Flashcards.map((card, i) => (
        <Flashcard key={i} {...card} onAdd={addToDeck} />
      ))}
    </div>
  );
};

export default LessonFlashcards;
