import React from 'react';
import './style.css';

const StateDisplay = props => {
  return (
    <div className='dataContainer'>
      <h2 className='stateName'>{props.stateName} </h2>

      <h2>
        Deaths Today:{' '}
        {props.deathsToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </h2>
      <h2>
        Total Deaths:{' '}
        {props.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </h2>
      <h2>
        Active Cases:{' '}
        {props.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </h2>
      <h2>
        Total Cases:{' '}
        {props.totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </h2>
      <p className='smallMessage'> *updated every 10 minutes</p>
    </div>
  );
};

export default StateDisplay;
