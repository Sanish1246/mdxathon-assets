import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import LessonCard from "./components/LessonCard";
import LessonFlashcards from "./components/LessonFlashcards";
import MyDeck from "./components/MyDeck";

function App() {
  const [deck, setDeck] = useState([]); // mazzo personale

  // Funzione per aggiungere flashcard al deck
  const addToDeck = (card) => {
    // Evita duplicati
    if (!deck.some((c) => c.front === card.front && c.back === card.back)) {
      setDeck([...deck, card]);
    }
  };
  return (
    // <>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📚 App di Lingue</h1>

      {/* Sezione Lezione */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lezione 1 – Saluti</h2>
        <LessonFlashcards addToDeck={addToDeck} />
      </section>

      {/* Sezione Deck Personale */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🎴 Il mio Deck</h2>
        <MyDeck deck={deck} />
      </section>
    </div>
    // {/* <LessonCard /> */}
    // {/* </> */}
  );
}

export default App;
