import React from 'react';
import './style.css';

const CurrentDate = () => {
  let todayDate = new Date().getDate();
  let todayMonth = new Date().getMonth();
  let todayYear = new Date().getFullYear();
  let monthName;

  switch (todayMonth) {
    case 0:
      monthName = 'January';
      break;
    case 1:
      monthName = 'February';
      break;
    case 2:
      monthName = 'March';
      break;
    case 3:
      monthName = 'April';
      break;
    case 4:
      monthName = 'May';
      break;
    case 5:
      monthName = 'June';
      break;
    case 6:
      monthName = 'July';
      break;
    case 7:
      monthName = 'July';
      break;
    case 8:
      monthName = 'July';
      break;
    case 9:
      monthName = 'July';
      break;
    case 10:
      monthName = 'July';
      break;
    default:
      monthName = 'July';
      break;
  }
  return (
    <div className='dateContainer'>
      <h1 className='dateTitle'>
        {monthName} {todayDate}, {todayYear}
      </h1>
    </div>
  );
};

export default CurrentDate;
