import React, { useState } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';

const generateWord = (size) => {
  const sizeIndex =
    size === undefined ? Math.floor(Math.random() * wordList.length) : size - 3;

  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }

  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const Stage = () => {
  const [words, setWords] = useState(['jahoda', 'plavat', 'mladší']);
  const [mistakesNumber, setMistakesNumber] = useState(0);

  const handleFinish = () => {
    setWords((prevWords) => [...prevWords.slice(1), generateWord(6)]);
  };

  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: {mistakesNumber}</div>
      <div className="stage__words">
        {words.map((word, index) => (
          <Wordbox
            word={word}
            key={word}
            onFinish={handleFinish}
            active={index === 0}
            onMistake={setMistakesNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default Stage;
