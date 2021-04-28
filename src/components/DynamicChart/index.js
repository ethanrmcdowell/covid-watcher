import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

const DynamicChart = () => {
  const [chartData, setChartData] = useState({});
  const covidData = useSelector(state => state.data[1]);
  const deathsObj = covidData.data.timeline.deaths;
  const deathArray = Object.values(deathsObj);
  const deathDates = Object.keys(deathsObj);
  console.log(deathDates);
  console.log(deathArray);
  // const dailyDeathArray = [];

  // for (let i = 1; i > 17; i++) {
  //   let thisDayDeaths = deathArray[i] - deathArray[i - 1];
  //   dailyDeathArray.push(thisDayDeaths);
  // }

  const Chart = () => {
    setChartData({
      labels: deathDates,
      datasets: [
        {
          label: 'Deaths',
          data: deathArray,
          borderColor: 'red',
          backgroundColor: 'red',
          borderWidth: 1.5,
        },
      ],
    });
  };
  useEffect(() => {
    const dailyDeathArray = [];
    for (let i = 1; i > 17; i++) {
      let thisDayDeaths = deathArray[i] - deathArray[i - 1];
      dailyDeathArray.push(thisDayDeaths);
    }
    console.log(dailyDeathArray);
    Chart();
  }, []);
  return (
    <div>
      <h1>Bar Chart</h1>
      <div>
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
