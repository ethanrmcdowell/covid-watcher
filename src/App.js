import React from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import FrontPageData from './components/FrontPageData';
import StatePage from './components/StatePage';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './style.css';

function App() {
  const covidData = useSelector(state => state.data[0]);
  const deathData = useSelector(state => state.data[1]);
  const stateData = useSelector(state => state.data[2]);
  const vaccineData = useSelector(state => state.data[3]);

  console.log(vaccineData);

  if (!covidData || !deathData || !stateData || !vaccineData) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Tabs defaultActiveKey='dailyNational'>
          <Tab eventKey='dailyNational' title='National'>
            <FrontPageData covidData={covidData} deathData={deathData} />
          </Tab>
          <Tab eventKey='dailyState' title='State'>
            <StatePage stateData={stateData} />
          </Tab>
          <Tab eventKey='dailyVaccine' title='Vaccine'>
            <h2>Daily vaccination numbers.</h2>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
