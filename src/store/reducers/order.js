import * as actionTypes from '../actions/actionTypes';

const initialState = {
  services: [],
  date: null,
  time: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.PLACE_ORDER) {
    return {
      ...state,
      date: action.date,
      time: action.time,
      services: action.services,
    };
  } else {
    return state;
  }
};

export default reducer;
