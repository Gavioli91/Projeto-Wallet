import fetchAllCoins from '../../services/requestApi';

export const SITE_WALLET = 'SITE_WALLET';
export const EMAIL = 'EMAIL';
export const API_REQUEST_TEST = 'API_REQUEST';
export const API_SUCESS_TEST = 'API_SUCCESS';
export const API_ENTER_TEST = 'API_FAIL';

export const setEnter = (payload) => ({ type: EMAIL, payload });

const testApiRequest = () => ({ type: API_REQUEST_TEST });

const testApiSuccess = (payload) => ({ type: API_SUCESS_TEST, payload });

const testaPIEnter = (error) => ({ type: API_ENTER_TEST, payload: { error } });

export const fetchCoins = () => (async (dispatch) => {
  dispatch(testApiRequest());
  try {
    const coins = await fetchAllCoins();
    dispatch(testApiSuccess(coins));
  } catch (error) {
    dispatch(testaPIEnter(error));
  }
}
);
