import React, { FC, useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import Mailto from '../../Mailto/Mailto';
import resumee from '../../../assets/resumee.pdf';
import './ContactIcons.css';

const ContactIcons: FC = () => {
  const [lastIndex, setLastIndex] = useState<number>(-1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastIndex((lastIndex) => {
        const nextIndex = lastIndex + 1;
        const buttons = document.querySelectorAll('.contact-button');
        if (nextIndex < buttons.length) {
          const icon = buttons[nextIndex];
          icon.classList.add('contact-button-fadeIn');
        } else {
          clearInterval(intervalId);
        }
        return nextIndex;
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="contact-buttons-container">
        <Mailto
          email="stfn.bgr@gmail.com"
          subject="Contact from website"
          body=""
        >
          <FaEnvelope className="contact-button" size="5rem" />
        </Mailto>
        <a
          href="https://github.com/erynder-z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-button" size="5rem" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-button" size="5rem" />
        </a>
        <a href={resumee} target="_blank" rel="noreferrer">
          <FaFilePdf className="contact-button" size="5rem" />
        </a>
      </div>
    </>
  );
};

export default ContactIcons;
