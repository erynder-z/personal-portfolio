import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RandomReveal } from 'react-random-reveal';
import { ignoreCharacters, revealCharacters } from '../../../utils/utils';
import './ContactForm.css';
import LanguageContext from '../../../contexts/LanguageContext';
import { getContactFormText } from '../getContactText';

interface Props {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const ContactForm: React.FC<Props> = ({
  setShowPopup,
  setPopupMessage,
}: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const { language } = useContext(LanguageContext);
  const { name, email, message } = getContactFormText(language);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSubmitting) {
      setIsSubmitting(true);
      if (
        process.env.REACT_APP_SERVICE_ID &&
        process.env.REACT_APP_TEMPLATE_ID
      ) {
        emailjs
          .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current!,
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then((result) => {
            setPopupMessage('Message sent!');
            setShowPopup(true);
            form.current?.reset();
          })
          .catch((error) => {
            setPopupMessage('Something went wrong!');
            setShowPopup(true);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
      }
    }
  };

  return (
    <form ref={form} className="contact-form-container" onSubmit={sendEmail}>
      <label>
        <RandomReveal
          isPlaying
          duration={1}
          characters={name}
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </label>
      <input type="text" name="user_name" required />
      <label>
        <RandomReveal
          isPlaying
          duration={1}
          characters={email}
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </label>
      <input type="email" name="user_email" required />
      <label>
        <RandomReveal
          isPlaying
          duration={1}
          characters={message}
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </label>
      <textarea name="message" required />
      <button type="submit" disabled={isSubmitting}>
        <RandomReveal
          isPlaying
          duration={1}
          characters="Send"
          characterSet={revealCharacters}
          ignoreCharacterSet={ignoreCharacters}
        />
      </button>
    </form>
  );
};
