import { fetchAllCoins, showAllCoins } from '../../services/requestApi';

export const SITE_WALLET = 'SITE_WALLET';
export const EMAIL = 'EMAIL';
export const API_REQUEST_TEST = 'API_REQUEST_TEST';
export const API_SUCESS_TEST = 'API_SUCCESS_TEST';
export const API_FAIL_TEST = 'API_FAIL_TEST';
export const CURRENCY_VALUE = 'CURRENCY_VALUE';

export const setEnter = (payload) => ({ type: EMAIL, payload });

const testApiRequest = () => ({ type: API_REQUEST_TEST });

const testApiSuccess = (payload) => ({ type: API_SUCESS_TEST, payload });

const testApiFail = (error) => ({ type: API_FAIL_TEST, payload: { error } });

const testCurrencyValue = (payload) => ({ type: API_SUCESS_TEST, payload });

export const fetchCoins = () => (async (dispatch) => {
  dispatch(testApiRequest());
  try {
    const currencies = await showAllCoins();
    dispatch(testApiSuccess(currencies));
  } catch (error) {
    dispatch(testApiFail(error));
  }
}
);

export const fetchValueCoins = () => (async (dispatch) => {
  dispatch(testApiRequest());
  try {
    const coinValue = await fetchAllCoins();
    console.log(coinValue);
    dispatch(testCurrencyValue(coinValue));
  } catch (error) {
    dispatch(apiFail(error));
  }
}
);
