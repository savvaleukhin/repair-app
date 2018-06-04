import { combineReducers } from 'redux';
import appData from './appData';
import cart from './cart';
import order from './order';

const rootReducer = combineReducers({
  appData,
  cart,
  order,
});

export default rootReducer;
