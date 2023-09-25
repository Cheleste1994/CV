import React from 'react';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import './resume.scss';

const Resume = () => (
  <div className="resume">
    <div className="title">
      My Resume.
      <div className="title__icon">
        <ArtTrackIcon />
      </div>
    </div>
    <div className="about">
      <div className="about__text">Front-end Developer</div>
      <div className="about__contact">
        <div>Personal Information</div>
        <div>Name: Philip Watson</div>
        <div>Age: 26 Years</div>
        <div>Residence: New York, USA</div>
        <div>Address: 123 Lorem Ipsum</div>
        <div>Email: example@example.com</div>
      </div>
    </div>
  </div>
);

export default Resume;
