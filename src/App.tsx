import React from 'react';
import Header from './components/shareds/Header/header';
import Router from './routes';
import './styles/vendors.scss';

const App = () => (
  <>
    <Header />
    <main>
      <Router />
    </main>
  </>
);

export default App;
