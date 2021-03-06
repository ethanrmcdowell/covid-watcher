import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import StateDisplay from '../StateDisplay';
import './style.css';

const StatePage = props => {
  console.log(props);
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
  if (!covidData) {
    return <h2>Loading...</h2>;
  } else if (!selectedState) {
    return (
      <div>
        <div className='dropdownContainer'>
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
