import React, { FC, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import './Loading.css';

const Loading: FC = () => {
  const [message, setMessage] = useState<string>('loading');
  const revealCharacters = [...'░▒▓|'.split('')];

  return (
    <div className="loading-container">
      <div className="loading">
        <span>
          <RandomReveal
            isPlaying
            duration={2}
            characters={message}
            characterSet={revealCharacters}
          />
        </span>
      </div>
    </div>
  );
};
export default Loading;
