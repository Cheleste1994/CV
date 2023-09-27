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
    <div className="about">
      <div className="about__text">Front-end Developer</div>
      <div className="about__contact">
        <div>Personal Information</div>
        <div>Name: {dataPerson.name}</div>
        <div>Age: {dataPerson.age}</div>
        <div>Residence: {dataPerson.residence}</div>
        <div>Address: {dataPerson.address}</div>
        <div>Email: {dataPerson.email}</div>
      </div>
    </div>
  </div>
);
export default Resume;
