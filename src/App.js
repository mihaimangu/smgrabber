import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Main from './Main';

import {BrowserRouter, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h2>
            Social media content grabber
          </h2>

          <Main />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
