import React from 'react';
import Header from './components/shareds/Header/header';
import Router from './routes';
import { useAppDispatch } from './store/hooks';
import { fetchProjects } from './store/slices/projects.slice';
import './styles/vendors.scss';

const App = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchProjects());
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
    </>
  );
};

export default App;
