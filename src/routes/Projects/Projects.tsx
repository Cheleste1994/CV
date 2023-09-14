import React from 'react';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useAppSelector } from '../../store/hooks';
import { selectProjects } from '../../store/slices/projects.slice';
import './projects.scss';

export default function Projects() {
  const useSelector = useAppSelector(selectProjects);

  const iFrameArray = useSelector.map((project, index) => (
    <div key={project.name || index}>
      <span className="projects__title">
        <a href={project.src || ''}>
          <LaptopIcon />
        </a>
        <a href={project.github || ''}>
          <GitHubIcon />
        </a>
      </span>
      <iframe src={project.src || ''} title="External Website" className="projects__iframe" />
    </div>
  ));

  return <div className="projects">{iFrameArray}</div>;
}
