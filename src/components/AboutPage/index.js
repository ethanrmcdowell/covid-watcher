import React from 'react';
import './style.css';

const AboutPage = props => {
  return (
    <div className='aboutContainer'>
      <ul>
        <li>
          Data provided by <a href='https://disease.sh/'>disease.sh</a>.
        </li>
        <li>
          Historical data shown on the national line graph is received from a
          different source, and may show slight variation.
        </li>
        <li>Most data is updated every 10 minutes.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
