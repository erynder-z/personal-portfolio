import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './AppFooter.css';

export default function AppFooter() {
  const footerText: string = '  2023 | Stefan Bamberger |';
  return (
    <div className="app-footer">
      {footerText}
      <a
        href="https://github.com/erynder-z"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="footer-gh-link" size="1rem" />
      </a>
    </div>
  );
}
