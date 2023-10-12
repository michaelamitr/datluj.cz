import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish, active, onMistake }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === lettersLeft[0]) {
        if (lettersLeft.length === 1) {
          onFinish();
        } else {
          setLettersLeft(lettersLeft.slice(1));
          setMistake(false);
        }
      } else {
        setMistake(true);
        onMistake((prevValue) => prevValue + 1);
      }
    };

    if (active) {
      document.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      if (active) {
        document.removeEventListener('keyup', handleKeyUp);
      }
    };
  }, [lettersLeft, active, onMistake]);

  return (
    <div className={mistake ? 'wordbox wordbox--mistake' : 'wordbox'}>
      {lettersLeft}
    </div>
  );
};

export default Wordbox;
