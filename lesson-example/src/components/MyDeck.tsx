import { useState } from "react";

const MyDeck = ({ deck }) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (deck.length === 0) {
    return (
      <p className="text-center">
        Il tuo deck è vuoto! Aggiungi delle flashcard 👆
      </p>
    );
  }

  const nextCard = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % deck.length);
  };

  const card = deck[index];

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="perspective-1000 w-64 h-40">
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
            flipped ? "rotate-y-180" : ""
          }`}
          onClick={() => setFlipped(!flipped)}
        >
          {/* Fronte della carta */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center border rounded-xl shadow-lg bg-white dark:bg-gray-800 backface-hidden">
            <p className="text-center text-lg font-semibold px-4">
              {card.front}
            </p>
          </div>

          {/* Retro della carta */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center border rounded-xl shadow-lg bg-gray-50 dark:bg-gray-700 backface-hidden rotate-y-180">
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
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default MyDeck;
