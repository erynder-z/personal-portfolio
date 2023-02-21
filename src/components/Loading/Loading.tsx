import React, { FC } from 'react';
import { RandomReveal } from 'react-random-reveal';
import './Loading.css';
import { revealCharacters } from '../../utils/utils';

const Loading: FC = () => {
  const message: string = 'loading';

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
