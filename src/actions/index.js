import axios from 'axios';

import { ADD_FETCHED_DATA, ADD_HISTORICAL_DATA } from './types';

const apiUrl =
  'https://disease.sh/v3/covid-19/countries/usa?yesterday=false&twoDaysAgo=false&strict=true&allowNull=false';

const apiUrlTwo = 'https://disease.sh/v3/covid-19/historical/usa?lastdays=16';

export const fetchData = () => {
  return async dispatch => {
    return await axios
      .get(apiUrl)
      // .then(response => {
      //   return response.data;
      // })
      .then(response => {
        dispatch({
          type: ADD_FETCHED_DATA,
          payload: response.data,
        });
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchDataTwo = () => {
  return async dispatch => {
    try {
      const response = await axios.get(apiUrlTwo);
      dispatch({
        type: ADD_HISTORICAL_DATA,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};
