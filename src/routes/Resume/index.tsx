import React from 'react';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import './resume.scss';
import dataPerson from '../../common/dataPerson';

const Resume = () => (
  <div className="resume">
    <div className="title">
      My Resume.
      <div className="title__icon">
        <ArtTrackIcon />
      </div>
    </div>
    <h2>Front-end Developer</h2>
    <div className="about">
      <div className="about__text">
        <div className="skills">
          Skills
          <div className="skills__title">
            Programming languages and technologies:
            <span className="skills__text">JavaScript, HTML/CSS, node.js </span>
          </div>
          <div className="skills__title">
            Frameworks and Libraries:
            <span className="skills__text">
              ReactJs, Redux, Bootstrap, SCSS, ESLint, Webpack, Vite, Material UI
            </span>
          </div>
          <div className="skills__title">
            Development Environments and Tools:
            <span className="skills__text">Visual Studio Code</span>
          </div>
          <div className="skills__title">
            Internet technologies:
            <span className="skills__text"> HTML, CSS, JavaScript, REST, HTTP2</span>
          </div>
          <div className="skills__title">
            Source Control:
            <span className="skills__text">GIT</span>
          </div>
          <div className="skills__title">
            Build Systems:
            <span className="skills__text"> Webpack, Vite</span>
          </div>
          <div className="skills__title">
            Graphic Design:
            <span className="skills__text">Adobe Photoshop, Figma </span>
          </div>
        </div>
      </div>
      <div className="about__contact">
        <div>Personal Information</div>
        <div className="about__title">
          Name: <span>{dataPerson.name}</span>
        </div>
        <div className="about__title">
          Age: <span>{dataPerson.age}</span>
        </div>
        <div className="about__title">
          Residence: <span>{dataPerson.residence}</span>
        </div>
        <div className="about__title">
          Address: <span>{dataPerson.address}</span>
        </div>
        <div className="about__title">
          Email: <span>{dataPerson.email}</span>
        </div>
        <div className="about__title">
          GitHub: <span>{dataPerson.github}</span>
        </div>
      </div>
    </div>
  </div>
);
export default Resume;
