import React, { FC, useEffect, useState } from 'react';

import './App.css';
import Loading from './Components/Loading/Loading';
import Navigation from './Components/Navigation/Navigation';

const App: FC = () => {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const shuffleNav = (categories: string[]): string[] => {
    const shuffledArray: string[] = categories.map((word) => {
      return shuffleWord(word);
    });
    return shuffledArray;
  };

  const shuffleText = (text: string): string => {
    const wordsArray: string[] = text.split(' ');
    const shuffledArray: string[] = wordsArray.map((word) => {
      return shuffleWord(word);
    });

    return shuffledArray.join(' ');
  };

  const shuffleWord = (s: string): string => {
    const getRandomInt = (n: number): number => {
      return Math.floor(Math.random() * n);
    };

    const arr: string[] = s.split('');
    const n: number = arr.length;

    for (let i = 0; i < n - 1; ++i) {
      const j: number = getRandomInt(n);

      let temp: string = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    s = arr.join('');
    return s;
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
    setTimeout(() => {
      setIsInitial(false);
    }, 8000);
  }, []);

  return (
    <div className="App">
      <Navigation
        shuffleText={shuffleText}
        shuffleNav={shuffleNav}
        isInitial={isInitial}
      />
      {showLoading && <Loading shuffleText={shuffleText} />}
    </div>
  );
};

export default App;
