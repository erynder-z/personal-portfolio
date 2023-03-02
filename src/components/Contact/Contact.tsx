import React, { FC } from 'react';
import './Contact.css';
import ContactIcons from './ContactIcons/ContactIcons';
import ScrollingText from './ScrollingText/ScrollingText';
import Greeting from './Greeting/Greeting';
import HoverItemEffect from './HoverItemEffect/HoverItemEffect';
import Footer from './Footer/Footer';
import { ContactForm } from './ContactForm/ContactForm';

interface Props {
  active: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupMessage: React.Dispatch<React.SetStateAction<string>>;
}

const Contact: FC<Props> = ({ active, setShowPopup, setPopupMessage }) => {
  // Set vh for Chrome 100vh fix
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  return (
    <div className="contact-container">
      <section className={!active ? 'hide' : ''}>
        {active && <ScrollingText />}
        <div className="contact-main">{active && <Greeting />}</div>
        <div className="lower-container">
          {active && <HoverItemEffect />}
          {active && <ContactIcons />}
          {active && (
            <ContactForm
              setShowPopup={setShowPopup}
              setPopupMessage={setPopupMessage}
            />
          )}
        </div>

        <h3 className="contact-footer">{active && <Footer />}</h3>
      </section>
    </div>
  );
};

export default Contact;
