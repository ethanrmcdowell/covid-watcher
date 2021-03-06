import {
  ADD_FETCHED_DATA,
  ADD_HISTORICAL_DATA,
  ADD_STATE_DATA,
  ADD_VACCINE_DATA,
} from '../actions/types';

export default function dataReducer(state = [], action) {
  switch (action.type) {
    case ADD_FETCHED_DATA:
      return [...state, action.payload];
    case ADD_HISTORICAL_DATA:
      return [...state, action.payload];
    case ADD_STATE_DATA:
      return [...state, action.payload];
    case ADD_VACCINE_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
}
