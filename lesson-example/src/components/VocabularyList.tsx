const VocabularyList = ({ vocab }) => {
  return (
    <ul className="space-y-2">
      {vocab.map((word, i) => (
        <li
          key={i}
          className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg"
        >
          <span className="font-medium">{word.it} 🇮🇹</span>
          <span>{word.fr} 🇫🇷</span>
          <span className="text-gray-500">({word.en})</span>
        </li>
      ))}
    </ul>
  );
};

export default VocabularyList;
