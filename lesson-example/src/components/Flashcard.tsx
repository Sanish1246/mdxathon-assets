import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Flashcard = ({ front, back, onAdd }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  // animazione al flip
  const handleFlip = () => {
    setFlipped(!flipped);
    gsap.to(cardRef.current, {
      rotateY: flipped ? 0 : 180,
      duration: 0.7,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="perspective-1000 w-64 h-40">
      <div
        ref={cardRef}
        className="relative w-full h-full cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
        }}
        onClick={handleFlip}
      >
        {/* Fronte */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center border rounded-xl shadow-lg bg-white dark:bg-gray-800"
          style={{ backfaceVisibility: "hidden" }}
        >
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

        {/* Retro */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center border rounded-xl shadow-lg bg-gray-50 dark:bg-gray-700"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
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
      `}</style>
    </div>
  );
};

export default Flashcard;
