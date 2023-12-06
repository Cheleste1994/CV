import React from 'react';
import { Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './header.scss';
import dataPerson from '../../../common/dataPerson';

export default function Header({
  isMenu,
  setMenu,
}: {
  isMenu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className={`header ${isMenu ? 'header_open' : ''}`}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className={`burger__icon ${isMenu ? 'burger__icon_open' : ''}`}
        onClick={() => setMenu(!isMenu)}
      >
        <span />
        <span />
        <span />
      </div>
      <div className="header-main">
        <div className="image-container">
          <div className="avatar">{dataPerson.name.toUpperCase()}</div>
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
