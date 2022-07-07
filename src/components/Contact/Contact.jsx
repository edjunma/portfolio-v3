import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

function Contact() {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  const [copySuccess, setCopySuccess] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccess('');
    }, 6000);
    return () => clearTimeout(timer);
  }, [copySuccess]);

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(`E-mail has been copied to clipboard! 📋✅`);
    } catch (err) {
      setCopySuccess('Failed to copy email address! 📋❌');
    }
    setInstructions('');
  };

  function showInstruction() {
    if (copySuccess) {
      return;
    }
    setInstructions(`Copy my e-mail below: ${email} 📋`);
  }

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <p className="email-instructions">
              {copySuccess} {instructions} {showInstruction}
            </p>
            <a
              type="button"
              aria-hidden="true"
              className="cta-btn cta-btn--contact"
              onClick={() => copyToClipBoard(email)}
              onKeyDown={copyToClipBoard}
              title="Copy my email"
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
}

export default Contact;
