import { useState, useRef } from "react";
import gsap from "gsap";

const MyDeck = ({ deck }) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  if (deck.length === 0) {
    return (
      <p className="text-center">
        Il tuo deck è vuoto! Aggiungi delle flashcard 👆
      </p>
    );
  }

  const nextCard = () => {
    setFlipped(false);
    gsap.fromTo(
      cardRef.current,
      {
        x: 500,
      },
      {
        x: 0,
        rotateY: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
      }
    );
    setIndex((prev) => (prev + 1) % deck.length);
  };

  const handleFlip = () => {
    setFlipped((prev) => {
      const newFlipped = !prev;
      gsap.to(cardRef.current, {
        rotateY: newFlipped ? 180 : 0,
        duration: 0.7,
        ease: "power2.inOut",
      });
      return newFlipped;
    });
  };

  const card = deck[index];

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="perspective-1000 w-64 h-40">
        <div
          ref={cardRef}
          className="relative w-full h-full cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
          onClick={handleFlip}
        >
          {/* Fronte */}
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center border rounded-xl shadow-lg bg-white dark:bg-gray-800"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-center text-lg font-semibold px-4">
              {card.front}
            </p>
          </div>

          {/* Retro */}
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center border rounded-xl shadow-lg bg-gray-50 dark:bg-gray-700"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-center text-lg font-semibold px-4">
              {card.back}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={nextCard}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Facile ✅
        </button>
        <button
          onClick={nextCard}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
        >
          Medio ⚡
        </button>
        <button
          onClick={nextCard}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
        >
          Difficile ❗
        </button>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default MyDeck;
