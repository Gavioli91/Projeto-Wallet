import { CURRENCY_VALUE, API_REQUEST_TEST, API_SUCESS_TEST,
  API_FAIL_TEST, DELETE_EXPENSE, EDIT_PURCHASE, PURCHASE_UPDATE } from '../actions';

const INITIAL_STATE = { currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFetching: false,
  error: '' };

const siteWalletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_VALUE:
    return { ...state,
      expenses: [...state.expenses, action.payload] };

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

  case EDIT_PURCHASE:
    return { ...state, change: true, idToEdit: action.payload };

  case PURCHASE_UPDATE:
    return { ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === state.idToEdit) {
          return { ...expense, ...action.payload };
        }
        return expense;
      }),
      change: false,
    };

  case DELETE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((coin) => coin.id
      !== action.payload) };

  default: return state;
  }
};

export default siteWalletReducer;
