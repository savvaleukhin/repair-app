import * as actionTypes from './actionTypes';

export const addToCart = (service, quantity) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { service, quantity },
  };
};

export const removeFromCart = id => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
