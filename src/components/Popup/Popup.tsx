import React from 'react';
import { RandomReveal } from 'react-random-reveal';
import { ignoreCharacters, revealCharacters } from '../../utils/utils';
import './Popup.css';

interface Props {
  popupMessage: string;
}

export const Popup: React.FC<Props> = ({ popupMessage }: Props) => {
  // Set vh for Chrome 100vh fix
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  return (
    <div className="popup-overlay">
      <RandomReveal
        isPlaying
        duration={1}
        characters={popupMessage}
        characterSet={revealCharacters}
        ignoreCharacterSet={ignoreCharacters}
      />
    </div>
  );
};

export default Popup;
