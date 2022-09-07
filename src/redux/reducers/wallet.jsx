import { CURRENCY_VALUE, API_REQUEST_TEST,
  API_SUCESS_TEST, API_FAIL_TEST, DELETE_EXPENSE } from '../actions';

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
  case CURRENCY_VALUE:
    return { ...state,
      expenses: [...state.expenses, action.payload],
    };

  case API_REQUEST_TEST:
    return { ...state, isFetching: true };

  case API_SUCESS_TEST:
    return { ...state,
      currencies: action.payload,
      isFetching: false,
      error: '' };

  case API_FAIL_TEST:
    return { ...state,
      isFetching: false,
      error: action.payload.error,
    };

  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((coin) => coin.id
      !== action.payload) };

  default: return state;
  }
};

export default siteWalletReducer;
