import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OtherPage from './OtherPage';
import MainComponent from './MainComponent';

function App() {
  return (
    <Router>
      <Fragment>
      <header className='header'>
        <div>This is a multicontainer application</div>
        <Link to="/"> Home </Link>
        <Link to="/otherpage">Other page </Link>
      </header>
        <Routes>
        <Route exact path="/" element={<MainComponent />}/>
        <Route exact path="/otherpage" element={<OtherPage />}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
