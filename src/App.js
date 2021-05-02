import React from 'react';

import Header from './components/Header';
import FrontPageData from './components/FrontPageData';
import StatePage from './components/StatePage';
import VaccinationPage from './components/VaccinationPage';
import AboutPage from './components/AboutPage';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './style.css';

function App() {
  return (
    <div>
      <Header />
      <Tabs defaultActiveKey='dailyNational'>
        <Tab eventKey='dailyNational' title='National'>
          <FrontPageData />
        </Tab>
        <Tab eventKey='dailyState' title='State'>
          <StatePage />
        </Tab>
        <Tab eventKey='dailyVaccine' title='Vaccine'>
          <VaccinationPage />
        </Tab>
        <Tab eventKey='info' title='Info'>
          <AboutPage />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
