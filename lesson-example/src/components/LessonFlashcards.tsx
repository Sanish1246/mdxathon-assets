import Flashcard from "./Flashcard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const lesson1Flashcards = [
  { front: "Ciao", back: "Good Morning" },
  { front: "Arrivederci", back: "Goodbye" },
  { front: "Come stai?", back: "How are you?" },
  { front: "Come stai?", back: "How are you?" },
  { front: "Come stai?", back: "How are you?" },
  { front: "Come stai?", back: "How are you?" },
  { front: "Come stai?", back: "How are you?" },
  { front: "Come stai?", back: "How are you?" },
];

const LessonFlashcards = ({ addToDeck }) => {
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.from(cardRefs.current, {
      y: 100,
      x: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {lesson1Flashcards.map((card, i) => (
        <div ref={(card) => (cardRefs.current[i] = card)}>
          <Flashcard
            key={i}
            {...card}
            onAdd={addToDeck}
            onClick={() => {
              gsap.to(".card", {
                rotateY: 180,
              });
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default LessonFlashcards;
