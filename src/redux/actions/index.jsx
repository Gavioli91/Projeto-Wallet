import { fetchAllCoins, showAllCoins } from '../../services/requestApi';

export const SITE_WALLET = 'SITE_WALLET';
export const EMAIL = 'EMAIL';
export const API_REQUEST_TEST = 'API_REQUEST_TEST';
export const API_SUCESS_TEST = 'API_SUCCESS_TEST';
export const API_FAIL_TEST = 'API_FAIL_TEST';
export const CURRENCY_VALUE = 'CURRENCY_VALUE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_PURCHASE = 'EDIT_EXPENSE';
export const PURCHASE_UPDATE = 'UPDATE_EXPENSE';

export const setEnter = (payload) => ({
  type: EMAIL, payload });

export const testApiRequest = () => ({
  type: API_REQUEST_TEST });

export const testApiSuccess = (payload) => ({
  type: CURRENCY_VALUE, payload });

export const testApiFail = (error) => ({
  type: API_FAIL_TEST, payload: { error } });

export const testCurrencyValue = (payload) => ({
  type: API_SUCESS_TEST, payload });

export const deletePurchase = (payload) => ({
  type: DELETE_EXPENSE, payload });

export const editPurchase = (payload) => ({
  type: EDIT_PURCHASE, payload });

export const purchaseUpdate = (payload) => ({
  type: PURCHASE_UPDATE, payload });

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
