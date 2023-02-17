import React, { FC, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';

import './Greeting.css';

const Greeting: FC = () => {
  const [greeting, setGreeting] = useState<string>(`Want to get in touch?`);
  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];
  return (
    <h2 className="contact-main-greeting">
      <RandomReveal
        isPlaying
        duration={1}
        characters={greeting}
        characterSet={revealCharacters}
        ignoreCharacterSet={ignoreCharacters}
      />
    </h2>
  );
};

export default Greeting;
