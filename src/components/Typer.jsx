import React, { useEffect } from 'react';

export const getRandom = (foo) => foo[Math.floor(Math.random() * foo.length)];

export const Typer = ({ words }) => {
  const [currentWord, setCurrentWord] = React.useState(getRandom(words));
  const [index, setIndex] = React.useState(1);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (index < currentWord.length) {
        setIndex(index + 1);
      } else {
        setCurrentWord(getRandom(words.filter((item) => item !== currentWord)));
        setIndex(1);
      }
    }, Math.random() * (300 - 150) + 150);
    return () => clearInterval(timeout);
  }, [currentWord, index]);

  return currentWord.slice(0, index);
};
