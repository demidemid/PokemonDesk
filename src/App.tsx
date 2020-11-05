import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <>
    <Header />
    <main className={cn(s.header, 'color')}>This is future main content!</main>
    <Footer />
  </>
);

export default App;
