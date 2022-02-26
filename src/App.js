import React, { Fragment } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage';
import BuildingsPage from './pages/BuildingsPage';
import NotFoundPage from './pages/NotFoundPage';
import firebase from './firebase';

function App() {
  firebase()

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/buildings" element={<BuildingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
