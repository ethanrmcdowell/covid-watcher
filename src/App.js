import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import FrontPageData from './components/FrontPageData';
import StatePage from './components/StatePage';
import AboutPage from './components/AboutPage';
import './style.css';

function App() {
  const covidData = useSelector(state => state.data[0]);
  const deathData = useSelector(state => state.data[1]);
  const stateData = useSelector(state => state.data[2]);

  if (!covidData || !deathData || !stateData) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <FrontPageData covidData={covidData} deathData={deathData} />
        <StatePage stateData={stateData} />
      </div>
    );
  }

  // return (
  //   <Router>
  //     <Header />
  //     <Switch>
  //       <Route
  //         exact
  //         path='/covid-watcher'
  //         render={props => (
  //           <FrontPageData
  //             covidData={covidData}
  //             deathData={deathData}
  //             stateData={stateData}
  //           />
  //         )}
  //       />
  //       <Route
  //         exact
  //         path='/covid-watcher/state'
  //         render={props => <StatePage stateData={stateData} />}
  //       />
  //       {/* <Route exact path='/' component={FrontPageData} /> */}
  //       {/* <Route exact path='/search' component={StatePage} /> */}
  //       <Route exact path='/covid-watcher/about' component={AboutPage} />
  //     </Switch>
  //   </Router>
  // );
}

export default App;
