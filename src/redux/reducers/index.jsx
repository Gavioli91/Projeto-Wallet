import { combineReducers } from 'redux';
import userReducer from './user';
import siteWalletReducer from './wallet';

const rootReducer = combineReducers({ user: userReducer, wallet: siteWalletReducer });

export default rootReducer;
