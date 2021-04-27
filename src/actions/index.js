import axios from 'axios';

const apiUrl =
  'https://corona.lmao.ninja/v2/countries/:usa?yesterday=true&strict=true&query';

export const SHOW_DATA = 'SHOW_DATA';

export const showData = data => {
  return {
    type: SHOW_DATA,
    payload: {
      newDeaths: data.stats.newDeaths,
      newCases: data.stats.newlyConfirmedCases,
    },
  };
};
