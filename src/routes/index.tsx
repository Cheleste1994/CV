import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects/Projects'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="projects"
      element={
        <Suspense fallback={<Spin />}>
          <Projects />
        </Suspense>
      }
    />
    <Route
      path="about"
      element={
        <Suspense fallback={<Spin />}>
          <About />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
