import React, { FC, useEffect } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import Mailto from '../../Mailto/Mailto';
import resumee from '../../../assets/resumee.pdf';
import './ContactIcons.css';

const ContactIcons: FC = () => {
  useEffect(() => {
    setTimeout(() => {
      const contactButtons = document.querySelectorAll('.contact-button');

      contactButtons.forEach((button, index) => {
        setTimeout(() => {
          button.classList.add('skill-item-fadeIn');
        }, 200 * (index + 1));
      });
    }, 200);
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
