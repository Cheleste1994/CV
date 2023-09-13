import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header-mobile" />
      <div className="header-main">
        <div className="image-container">
          <div className="avatar" />
        </div>
        <div className="nav-container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT ME</Link>
              </li>
              <li>
                <Link to="/about">RESUME</Link>
              </li>
              <li>
                <Link to="/projects">PROJECTS</Link>
              </li>
              <li>
                <Link to="/about">CONTACT</Link>
              </li>
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </header>
  );
}
