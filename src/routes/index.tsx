import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route, Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Home = lazy(() => import('./Home'));
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
              <Spin className="spin__active" size="large" tip="Loading" />
            </div>
          }
        >
          <CSSTransition in timeout={300} classNames="page-transition" unmountOnExit>
            <Outlet />
          </CSSTransition>
        </Suspense>
      }
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default Router;
