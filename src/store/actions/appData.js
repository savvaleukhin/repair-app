import * as actionTypes from './actionTypes';

const APP_URL = 'https://festive-tendency.glitch.me/repair.json';

const setRootData = data => {
  return {
    type: actionTypes.SET_ROOT_DATA,
    payload: data,
  };
};

export const initRootData = () => {
  return dispatch => {
    fetch(APP_URL)
      .then(res => res.json())
      .catch(error => console.log(error)) //TODO:
      .then(data => {
        dispatch(setRootData(data));
      });
  };
};
