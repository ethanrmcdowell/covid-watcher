import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import FrontPageData from './components/FrontPageData';
import StatePage from './components/StatePage';
import AboutPage from './components/AboutPage';
import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/covid-watcher' component={FrontPageData} />
        <Route exact path='/covid-watcher/search' component={StatePage} />
        <Route exact path='/covid-watcher/about' component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default App;
