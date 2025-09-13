import { useState } from "react";

const Flashcard = ({ front, back, onAdd }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-64 h-40">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          flipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setFlipped(!flipped)}
      >
        {/* Fronte della carta */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center border rounded-xl shadow-lg bg-white dark:bg-gray-800 backface-hidden">
          <p className="text-center text-lg font-semibold px-4">{front}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAdd({ front, back });
            }}
            className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors"
          >
            ➕
          </button>
        </div>

        {/* Retro della carta */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center border rounded-xl shadow-lg bg-gray-50 dark:bg-gray-700 backface-hidden rotate-y-180">
          <p className="text-center text-lg font-semibold px-4">{back}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAdd({ front, back });
            }}
            className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm hover:bg-blue-600 transition-colors"
          >
            ➕
          </button>
        </div>
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

export default Flashcard;
