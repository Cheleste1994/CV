import React, { useEffect } from 'react';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { incrementCount, selectProjects } from '../../store/slices/projects.slice';
import './projects.scss';

export default function Projects() {
  const dispatch = useAppDispatch();
  const useSelector = useAppSelector(selectProjects);

  const iFrameArray = useSelector.projects.slice(0, useSelector.count).map((project, index) => (
    <div key={project.name || index}>
      <span className="projects__title">
        <a href={project.src || ''}>
          <LaptopIcon />
        </a>
        <a href={project.github || ''}>
          <GitHubIcon />
        </a>
      </span>
      <iframe
        src={project.src || ''}
        title="External Website"
        className="projects__iframe"
        style={{ opacity: 0, transition: 'all 0.5s' }}
        onLoad={(e) => {
          const { target } = e;
          if (target) {
            (target as HTMLIFrameElement).style.opacity = '1';
          }
        }}
      />
    </div>
  ));

  useEffect(() => {}, [useSelector.count]);

  // useEffect(() => {
  //   if (refDiv.current) {
  //     if (window.innerHeight > refDiv.current.clientHeight) {
  //       setCount(count > useSelector.length ? count : count + 1);
  //     }
  //   }
  // }, [count, useSelector.length]);

  return (
    <div className="main__projects">
      <div className="title">
        Projects.
        <div className="title__icon">
          <CardTravelIcon />
        </div>
      </div>
      <div className="projects">{iFrameArray}</div>
      {useSelector.count !== useSelector.length ? (
        <Button className="projects__more" onClick={() => dispatch(incrementCount())}>
          More
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
}
