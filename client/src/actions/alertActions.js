import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'react-uuid';
export const setAlert = (msg, alertType, timeout = 4000) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id,
    },
  });

  // setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const removeAlert = (idToRemove) => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
    payload: idToRemove,
  });
};
