import {combineReducers} from 'redux';
import cartReducer from './reducer';
import authReducer from './authReducer';
const rootReducer = combineReducers({
  dish: cartReducer,
  auth: authReducer,
});

export default rootReducer;
