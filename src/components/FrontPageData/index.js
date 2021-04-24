import React from 'react';
import './style.css';

const FrontPageData = props => {
  return (
    <div className='dataContainer'>
      <h2 className='title'>Newly Confirmed Cases: {props.newCases}</h2>
      <h2 className='title'>New Deaths: {props.newDeaths}</h2>
      <h2 className='title'>Total Confirmed Cases: {props.totalCases}</h2>
      <h2 className='title'>Total Deaths: {props.totalDeaths}</h2>
    </div>
  );
};

export default FrontPageData;
