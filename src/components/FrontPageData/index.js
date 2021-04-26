import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentDate from '../CurrentDate';
import DynamicChart from '../DynamicChart';
import './style.css';

const FrontPageData = props => {
  const [covidStats, setCovidStats] = useState([]);
  const [covidData, setCovidData] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/',
      headers: {
        'x-rapidapi-key': '640d573e98msh95e98b5515eb63ap1da078jsn5ce852b9cb8a',
        'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCovidStats(response.data.stats);
        setCovidData(response.data.stats.history);
        console.log(covidData[covidData.length - 1]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className='dataContainer'>
      <CurrentDate />
      <h2 className='title'>
        Newly Confirmed Cases: {covidStats.newlyConfirmedCases}
      </h2>
      <h2 className='title'>New Deaths: {covidStats.newDeaths}</h2>
      <h2 className='title'>
        Total Confirmed Cases: {covidStats.totalConfirmedCases}
      </h2>
      <h2 className='title'>Total Deaths: {covidStats.totalDeaths}</h2>
      <div>{/* <DynamicChart covidStats={covidData} /> */}</div>
    </div>
  );
};

export default FrontPageData;
