import {orderDetails} from '../constants/dataItems';
import * as types from './actionTypes';
const initialState = {
  cart: [],
  // items: orderDetails,
  totalQuantity: 0,
  totalPrice: 0,
  DeliveryCharges: 10,
  Discount: 20,
};
const cartReducer = (state = initialState, action) => {
  console.log('========> state', state);
  switch (action.type) {
    case types.ADD_TO_CART:
      let find = state.cart.findIndex(item => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
      state.totalQuantity = state.totalQuantity + 1;
      return {...state};
    case types.GET_CART_TOTAL:
      let {totalQuantity, totalPrice} = state.cart.reduce(
        (cartTotal, cartItem) => {
          // console.log('cartTotal: ' + cartTotal);
          // console.log('cartItem: ' + cartItem);
          const {price, quantity} = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        },
      );
      return {
        ...state,
        totalPrice: parseInt(totalPrice.toFixed(2)),
        totalQuantity: totalQuantity,
      };
    case types.REMOVE_ITEM:
      let quant = 0;
      let TotalPrice = 0;
      return {
        ...state,
        cart: state.cart.filter(item => {
          if (item.id !== action.payload) {
            console.log('item.quantity----->', item.quantity);
            console.log('state.totalQuantity----->', state.totalQuantity);

            return item;
          } else {
            quant = state.totalQuantity - item.quantity;
            TotalPrice = state.totalPrice - item.price * item.quantity;
          }
        }),
        totalQuantity: quant,
        totalPrice: TotalPrice,
      };
    case types.INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload) {
            return {...item, quantity: item.quantity + 1};
          }
          return item;
        }),
      };
    case types.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity <= 0 ? item.quantity : item.quantity - 1,
            };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
export default cartReducer;
