import React from 'react';
import { useRoutes } from 'hookrouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import NotFoundPage from './pages/NotFound';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);

  return (
    <>
      <Header />
      <Main>{match || <NotFoundPage />}</Main>
      <Footer />
    </>
  );
};

export default App;
