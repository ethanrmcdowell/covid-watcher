import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import FrontPageData from './components/FrontPageData';
import CurrentDate from './components/CurrentDate';
import './style.css';
import axios from 'axios';

function App() {
  const [covidStats, setCovidStats] = useState([]);
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
        return response.data.stats;
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className='dataContainer'>
        <CurrentDate />
        <FrontPageData
          newCases={covidStats.newlyConfirmedCases}
          newDeaths={covidStats.newDeaths}
          totalCases={covidStats.totalConfirmedCases}
          totalDeaths={covidStats.totalDeaths}
        />
      </div>
    </div>
  );
}

export default App;
