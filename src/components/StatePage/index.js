import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import CurrentDate from '../CurrentDate';
import StateDisplay from '../StateDisplay';
import './style.css';

const StatePage = props => {
  const covidData = props.stateData;
  const [selectedState, setSelectedState] = useState(false);
  const [selectedStateData, setSelectedStateData] = useState();
  let stateList = [];
  covidData.forEach(stateData => {
    stateList.push(stateData.state);
  });
  stateList = stateList.sort();

  const search = stateName => {
    for (var i = 0; i < covidData.length; i++) {
      if (covidData[i].state === stateName) {
        setSelectedStateData(covidData[i]);
        console.log(covidData[i]);
        return covidData[i];
      }
    }
  };

  if (!selectedState) {
    return (
      <div>
        <div className='dropdownContainer'>
          <h2 className='titleText'>View current data by state:</h2>
          <Dropdown>
            <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
              Select State / Territory
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {stateList.map(stateName => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      setSelectedState(true);
                      search(stateName);
                    }}>
                    {stateName}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  } else if (selectedState) {
    return (
      <div>
        <div className='dropdownContainer'>
          <h2>View current data by state:</h2>
          <Dropdown>
            <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
              Select a State
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {stateList.map(stateName => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      setSelectedState(true);
                      search(stateName);
                    }}>
                    {stateName}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <CurrentDate />
        <StateDisplay
          stateName={selectedStateData.state}
          deathsToday={selectedStateData.todayDeaths}
          deaths={selectedStateData.deaths}
          active={selectedStateData.active}
          totalCases={selectedStateData.cases}
        />
      </div>
    );
  }
};

export default StatePage;
