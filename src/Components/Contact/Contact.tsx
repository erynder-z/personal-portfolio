import React, { FC } from 'react';
import './Contact.css';
import ContactIcons from './ContactIcons/ContactIcons';
import ScrollingText from './ScrollingText/ScrollingText';
import Greeting from './Greeting/Greeting';
import HoverItemEffect from './HoverItemEffect/HoverItemEffect';
import Footer from './Footer/Footer';

interface Props {
  active: boolean;
}

const Contact: FC<Props> = ({ active }) => {
  return (
    <div className="contact-container">
      <section className={!active ? 'hide' : ''}>
        {active && <ScrollingText />}
        <div className="contact-main">{active && <Greeting />}</div>
        <div className="lower-container">
          {active && <HoverItemEffect />}
          {active && <ContactIcons />}
        </div>
        <h3 className="contact-footer">{active && <Footer />}</h3>
      </section>
    </div>
  );
};

export default Contact;
