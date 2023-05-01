import * as types from './actionTypes';
const initialstate = {
  users: [],
  email: '',
  fullName: '',
  isLoggedin: false,
};

const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.SIGNUP:
      console.log('email=======******', action.payload.email);
      console.log('fullName=======******', action.payload.fullName);
      return {
        ...state,
        users: [...state.users, action.payload],
        email: action.payload.email,
        fullName: action.payload.fullName,
        isLoggedin: false,
      };
    case types.LOGIN:
      return {
        ...state,
        isLoggedin: true,
        email: action.payload,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
