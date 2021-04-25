import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import FrontPageData from './components/FrontPageData';
import SearchPage from './components/SearchPage';
import AboutPage from './components/AboutPage';
import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={FrontPageData} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
