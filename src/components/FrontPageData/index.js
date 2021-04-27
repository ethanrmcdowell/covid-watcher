import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentDate from '../CurrentDate';
import DynamicChart from '../DynamicChart';
import './style.css';

const FrontPageData = props => {
  const [covidStats, setCovidStats] = useState([]);
  const [covidData, setCovidData] = useState([]);
  const [mostRecentDate, setMostRecentDate] = useState();
  const [stateData, setStateData] = useState([]);
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
        // setCovidData(response.data.stats.history);
        // setMostRecentDate(
        //   covidStats.history[covidData.length - 1].date.slice(0, 10)
        // );
        // console.log(covidData[covidData.length - 1]);
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className='dataContainer'>
      <h2>Data goes here.</h2>
      {/* {<CurrentDate />}
      <h1 className='titleDate'>{mostRecentDate}</h1>
      <h2 className='title'>
        Newly Confirmed Cases: {covidStats.newlyConfirmedCases}
      </h2>
      <h2 className='title'>New Deaths: {covidStats.newDeaths}</h2>
      <h2 className='title'>
        Total Confirmed Cases: {covidStats.totalConfirmedCases}
      </h2>
      <h2 className='title'>Total Deaths: {covidStats.totalDeaths}</h2>
      <div><DynamicChart covidStats={covidData} /></div> */}
    </div>
  );
};

export default FrontPageData;
