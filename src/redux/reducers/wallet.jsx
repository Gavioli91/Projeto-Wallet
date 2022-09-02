import { SITE_WALLET, API_REQUEST_TEST,
  API_SUCESS_TEST, API_ENTER_TEST } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFetching: false,
  error: '',
};

const siteWalletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SITE_WALLET:
    return { ...state, ...action.value };

  case API_REQUEST_TEST:
    return { ...state, isFetching: true };

  case API_SUCESS_TEST:
    return { ...state,
      currencies: action.payload.currencies,
      isFetching: false,
      error: '' };

  case API_ENTER_TEST:
    return { ...state,
      isFetching: false,
      error: action.payload.error,
    };

  default: return state;
  }
};

export default siteWalletReducer;
