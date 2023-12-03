import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

export function Footer() {
  return (
    <div className="footer">
      <div className="leftSide">
        <Link to="/contato">Contato</Link>
        <Link to="/aboutUS">Sobre nós</Link>
      </div>
      <div className="footer-copyright">
        &copy; 2023 Mind Consulting
      </div>
    </div>
  );
}
