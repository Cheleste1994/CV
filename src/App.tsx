import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/shareds/Header/header';
import Router from './routes';
import { useAppDispatch } from './store/hooks';
import { fetchProjects, incrementCount } from './store/slices/projects.slice';
import './styles/vendors.scss';

const App = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  dispatch(fetchProjects());

  const handleScroll = useCallback(
    (event: Event) => {
      if (event.target) {
        const { scrollTop, offsetHeight, scrollHeight } = event.target as HTMLElement;
        if (scrollTop + offsetHeight === scrollHeight) {
          dispatch(incrementCount());
        }
      }
    },
    [dispatch],
  );

  useEffect(() => {
    const main = document.querySelector('main');
    if (location.pathname !== '/projects') {
      main?.removeEventListener('scroll', handleScroll as EventListener);
      return;
    }

    main?.addEventListener('scroll', handleScroll as EventListener);
  }, [handleScroll, location]);

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
