import * as actionTypes from '../actions/actionTypes';

const initialState = {
  root: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ROOT_DATA:
      return {
        ...state,
        root: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
