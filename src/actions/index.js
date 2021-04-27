import axios from 'axios';

import { ADD_FETCHED_DATA, SHOW_DAILY_DATA } from './types';

const apiUrl =
  'https://corona.lmao.ninja/v2/countries/usa?yesterday=true&strict=true&query';

export const showData = data => {
  return {
    type: SHOW_DAILY_DATA,
    payload: {
      newDeaths: data.todayDeaths,
      newCases: data.todayCases,
    },
  };
};

export const fetchData = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        return response.data;
      })
      .then(data => {
        dispatch({
          type: ADD_FETCHED_DATA,
          payload: data,
        });
      })
      .catch(error => {
        throw error;
      });
  };
};
