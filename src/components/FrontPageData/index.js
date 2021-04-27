import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { showData } from '../../actions';
import { useSelector } from 'react-redux';
import CurrentDate from '../CurrentDate';
import DynamicChart from '../DynamicChart';
import './style.css';

const FrontPageData = props => {
  const someData = useSelector(state => state);
  console.log(someData);
  return (
    <div>
      <CurrentDate />
    </div>
  );
};

export default FrontPageData;
