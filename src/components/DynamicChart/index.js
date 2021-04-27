import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const DynamicChart = props => {
  const [chartData, setChartData] = useState({});

  function handleLabels(j) {
    const covidList = [];
    for (let i = 1; i < 7; i++) {
      covidList.push(props.covidStats[props.covidStats.length - i].date);
    }
    return covidList[j];
  }

  function handleData(j) {
    const dataList = [];
    for (let i = 1; i < 9; i++) {
      let todayTotalDeaths =
        props.covidStats[props.covidStats.length - i].deaths;
      let yesterdayTotalDeaths =
        props.covidStats[props.covidStats.length - i - 1].deaths;
      let todayDeaths = todayTotalDeaths - yesterdayTotalDeaths;
      dataList.push(todayDeaths);
    }
    console.log(dataList);
    return dataList[j];
  }

  const Chart = () => {
    setChartData({
      labels: [
        handleLabels(6).slice(0, 10),
        handleLabels(5).slice(0, 10),
        handleLabels(4).slice(0, 10),
        handleLabels(3).slice(0, 10),
        handleLabels(2).slice(0, 10),
        handleLabels(1).slice(0, 10),
        handleLabels(0).slice(0, 10),
      ],
      datasets: [
        {
          label: 'Deaths',
          data: [
            handleData(6),
            handleData(5),
            handleData(4),
            handleData(3),
            handleData(2),
            handleData(1),
            handleData(0),
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  };
  useEffect(() => {
    Chart();
  }, [chartData]);
  return (
    <div>
      <h1>Bar Chart</h1>
      <div>
        <Bar
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

// props.covidStats.history[394].date.slice(0, 10),
// props.covidStats.history[395].date.slice(0, 10),
// props.covidStats.history[396].date.slice(0, 10),
// props.covidStats.history[397].date.slice(0, 10),
// props.covidStats.history[398].date.slice(0, 10),
// props.covidStats.history[399].date.slice(0, 10),
// props.covidStats.history[400].date.slice(0, 10),
