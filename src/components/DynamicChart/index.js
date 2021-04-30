import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import './style.css';

const DynamicChart = props => {
  console.log(defaults.font.family);
  defaults.font.family = 'Times New Roman';
  const [chartData, setChartData] = useState({});
  const covidData = props.deathData;
  console.log(covidData);

  const deathsObj = covidData.timeline.deaths;
  const deathArray = Object.values(deathsObj);
  const deathDates = Object.keys(deathsObj);
  const dailyDeathArray = [];
  for (let i = 1; i < 16; i++) {
    let dailyDeathCount = deathArray[i] - deathArray[i - 1];
    dailyDeathArray.push(dailyDeathCount);
  }

  const Chart = () => {
    setChartData({
      labels: deathDates,
      datasets: [
        {
          label: 'Deaths',
          data: dailyDeathArray,
          borderColor: 'red',
          backgroundColor: 'red',
          borderWidth: 1.5,
        },
      ],
    });
  };
  useEffect(() => {
    Chart();
  }, []);
  return (
    <div className='container'>
      <div className='chartContainer'>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: 'THICCNESS SCALE', display: true },
            scales: {
              y: {
                grace: '0.5%',
                beginAtZero: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DynamicChart;
