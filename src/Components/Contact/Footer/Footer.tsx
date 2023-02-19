import React, { FC, useState } from 'react';
import { RandomReveal } from 'react-random-reveal';

import './Footer.css';

const Footer: FC = () => {
  const [footerText, setFooterText] = useState<string>(
    '2023 | Stefan Bamberger'
  );
  const revealCharacters = [...'░▒▓|'.split('')];
  const ignoreCharacters = [...' '.split('')];
  return (
    <RandomReveal
      isPlaying
      duration={1}
      characters={footerText}
      characterSet={revealCharacters}
      ignoreCharacterSet={ignoreCharacters}
    />
  );
};

export default Footer;
