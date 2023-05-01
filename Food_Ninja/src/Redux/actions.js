import * as types from './actionTypes';
export const addToCart = item => {
  console.log(item, 'itemitem');
  return {
    type: types.ADD_TO_CART,
    payload: item,
  };
};
export const getCartTotal = () => {
  return {
    type: types.GET_CART_TOTAL,
  };
};
export const removeItem = payload => {
  return {
    type: types.REMOVE_ITEM,
    payload,
  };
};
export const increaseItemQuantity = id => {
  return {
    type: types.INCREASE_ITEM_QUANTITY,
    payload: id,
  };
};
export const decreaseItemQuantity = id => {
  return {
    type: types.DECREASE_ITEM_QUANTITY,
    payload: id,
  };
};

export const login = email => {
  return {
    type: types.LOGIN,
    payload: email,
  };
};

export const signup = userInfo => {
  return {
    type: types.SIGNUP,
    payload: userInfo,
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};
