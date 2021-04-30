import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import FrontPageData from './components/FrontPageData';
import StatePage from './components/StatePage';
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
}

export default App;
