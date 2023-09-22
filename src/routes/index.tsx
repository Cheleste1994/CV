import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects/Projects'));
const Contact = lazy(() => import('./Contact/Contact'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense
          fallback={
            <div className="suspense">
              <Spin className="spin__active" />
            </div>
          }
        >
          <Home />
        </Suspense>
      }
    />
    <Route
      path="projects"
      element={
        <Suspense
          fallback={
            <div className="suspense">
              <Spin className="spin__active" />
            </div>
          }
        >
          <Projects />
        </Suspense>
      }
    />
    <Route
      path="about"
      element={
        <Suspense
          fallback={
            <div className="suspense">
              <Spin className="spin__active" />
            </div>
          }
        >
          <About />
        </Suspense>
      }
    />
    <Route
      path="contact"
      element={
        <Suspense
          fallback={
            <div className="suspense">
              <Spin className="spin__active" />
            </div>
          }
        >
          <Contact />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
