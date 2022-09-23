import React, { FC, useEffect, useState } from 'react';
import './Loading.css';

interface Props {
  shuffleText: (text: string) => string;
}

const Loading: FC<Props> = ({ shuffleText }) => {
  const [message, setMessage] = useState<string>('loading');

  const shuffle = (): void => {
    const shuffle = setInterval(() => {
      setMessage(shuffleText(message));
    }, 50);

    setTimeout(() => {
      clearInterval(shuffle);
      setMessage('loading');
    }, 1000);
  };

  useEffect(() => {
    shuffle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="loading-container">
      <div className="loading">
        <span>{message}</span>
      </div>
    </div>
  );
};
export default Loading;
