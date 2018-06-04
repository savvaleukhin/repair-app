import * as actionTypes from './actionTypes';

export const placeOrder = (services, dateTime) => {
  const { date, time } = dateTime;
  return {
    type: actionTypes.PLACE_ORDER,
    services,
    date,
    time,
  };
};
