import { Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav__active' : '')}
              key="home"
            >
              <Button>
                <HomeIcon />
                HOME
              </Button>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav__active' : '')}
              key="about"
            >
              <Button>
                <PermIdentityIcon />
                ABOUT ME
              </Button>
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? 'nav__active' : '')}
              key="resume"
            >
              <Button>
                <ArtTrackIcon />
                RESUME
              </Button>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'nav__active' : '')}
              key="projects"
            >
              <Button>
                <CardTravelIcon />
                PROJECTS
              </Button>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'nav__active' : '')}
              key="contact"
            >
              <Button>
                <MailOutlineIcon />
                CONTACT
              </Button>
            </NavLink>
          </div>
          <Footer />
        </div>
      </div>
    </header>
  );
}
