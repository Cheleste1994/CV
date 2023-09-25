import { Spin } from 'antd';
import React, { useEffect, useCallback, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useLocation } from 'react-router-dom';
import Header from './components/shareds/Header/header';
import Router from './routes';
import { useAppDispatch } from './store/hooks';
import { fetchProjects, incrementCount } from './store/slices/projects.slice';
import './styles/vendors.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const csstransitionRef = useRef(null);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <>
      <CSSTransition
        in={isLoading}
        timeout={500}
        classNames="loading"
        nodeRef={csstransitionRef}
        unmountOnExit
      >
        <div className="page-loading" ref={csstransitionRef}>
          <span className="loading__name">
            <span className="span_hidden" />
            ANDREI SHAMAYEU
          </span>
          <Spin className="spin__active" size="large" />
        </div>
      </CSSTransition>
      <Header />
      <main>
        <Router />
      </main>
    </>
  );
};

export default App;
