import { Button } from '@mui/material';
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
            <Button>
              <Link to="/">HOME</Link>
            </Button>
            <Button>
              <Link to="/about">ABOUT ME</Link>
            </Button>
            <Button>
              <Link to="/about">RESUME</Link>
            </Button>
            <Button>
              <Link to="/projects">PROJECTS</Link>
            </Button>
            <Button>
              <Link to="/about">CONTACT</Link>
            </Button>
          </div>
          <Footer />
        </div>
      </div>
    </header>
  );
}
