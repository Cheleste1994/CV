import { Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
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
            <Link to="/">
              <Button>HOME</Button>
            </Link>
            <Link to="/about">
              <Button>ABOUT ME</Button>
            </Link>
            <Link to="/about">
              <Button>RESUME</Button>
            </Link>
            <Link to="/projects">
              <Button>PROJECTS </Button>
            </Link>
            <Link to="/contact">
              <Button>
                <MailOutlineIcon />
                CONTACT
              </Button>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    </header>
  );
}
