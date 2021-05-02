import React from 'react';
import { useSelector } from 'react-redux';
import CurrentDate from '../CurrentDate';
import DynamicChart from '../DynamicChart';
import './style.css';

const FrontPageData = props => {
  // const covidData = props.covidData;
  // const deathData = props.deathData;

  const covidData = useSelector(state => state.data[0]);
  const deathData = useSelector(state => state.data[1]);

  if (!covidData || !deathData) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else {
    return (
      <div>
        <CurrentDate />
        <div className='container'>
          <div className='dataContainer'>
            <h1 className='countryHeader'>United States:</h1>
            <h2>
              Total Deaths:{' '}
              {covidData.deaths
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </h2>
            <h2>
              Deaths Today:{' '}
              {covidData.todayDeaths
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </h2>
            <h2>
              Total Active Cases:{' '}
              {covidData.active
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </h2>
          </div>
          <div className='dataContainer'>
            <DynamicChart deathData={deathData} />
          </div>
        </div>
      </div>
    );
  }
};

export default FrontPageData;
