import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    // add a new alert
    case SET_ALERT:
      return [...state, action.payload];

    // Delete an alert
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
}
