import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import './style.css';

const VaccinationPage = props => {
  console.log(props.vaccineData.timeline);
  defaults.font.family = 'Times New Roman';
  const [chartData, setChartData] = useState({});
  const vaccineData = props.vaccineData.timeline;
  const totalAdministered = vaccineData[vaccineData.length - 1].total;
  const dateArray = [];
  const vaccineArray = [];

  console.log(totalAdministered);

  for (let i = 0; i < props.vaccineData.timeline.length; i++) {
    dateArray.push(vaccineData[i].date);
    vaccineArray.push(vaccineData[i].daily);
  }

  const Chart = () => {
    setChartData({
      labels: dateArray,
      datasets: [
        {
          label: 'Vaccines Administered',
          data: vaccineArray,
          borderColor: 'green',
          backgroundColor: 'green',
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
      <div className='titleContainer'>
        <h2 className='title'>
          Total vaccines administered in the United States:{' '}
          {totalAdministered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </h2>
      </div>
      <div className='chartContainer'>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: 'THICCNESS SCALE', display: true },
            scales: {
              y: {
                grace: '30%',
                beginAtZero: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default VaccinationPage;
