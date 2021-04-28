import React from 'react';
import { useSelector } from 'react-redux';
import CurrentDate from '../CurrentDate';
import DynamicChart from '../DynamicChart';
import './style.css';

const FrontPageData = props => {
  const covidData = useSelector(state => state.data[0]);
  if (!covidData) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else {
    return (
      <div className='dataContainer'>
        <CurrentDate />
        <h1 className='countryHeader'>United States:</h1>
        <h2>
          Total Deaths:{' '}
          {covidData.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </h2>
        <h2>
          Today Deaths:{' '}
          {covidData.todayDeaths
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </h2>
        <h2>
          Total Active Cases:{' '}
          {covidData.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </h2>
        <div>
          <DynamicChart />
        </div>
      </div>
    );
  }
};

export default FrontPageData;
