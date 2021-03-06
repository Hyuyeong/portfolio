import { Fragment } from 'react';
import Footer from './components/footer';
import Header from './components/Header';
import Main from './components/main';

import { Routes, Route, Link } from 'react-router-dom';
import Portfolios from './components/Portfolios';
import AboutMe from './components/AboutMe';
import Welcome from './components/Welcome';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolios" element={<Portfolios />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
