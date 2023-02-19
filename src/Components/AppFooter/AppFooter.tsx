import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './AppFooter.css';

export default function AppFooter() {
  return (
    <div className="app-footer">
      2023 | Stefan Bamberger |
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
