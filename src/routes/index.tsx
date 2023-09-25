import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route, Outlet } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Resume = lazy(() => import('./Resume'));
const Projects = lazy(() => import('./Projects/Projects'));
const Contact = lazy(() => import('./Contact/Contact'));

const Router = () => (
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
          <Outlet />
        </Suspense>
      }
    >
      <Route path="" element={<Home />} />
      <Route path="resume" element={<Resume />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default Router;
