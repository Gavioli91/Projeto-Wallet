const URL_API = 'https://economia.awesomeapi.com.br/json/all';

export const showAllCoins = async () => {
  const response = await fetch(URL_API);
  const payDay = await response.json();
  return payDay;
};

export const fetchAllCoins = async () => {
  try {
    const coins = await showAllCoins();
    const keys = Object.keys(coins);
    const currencies = keys.filter((key) => key !== 'USDT');
    return { currencies };
  } catch (error) {
    return error;
  }
};
