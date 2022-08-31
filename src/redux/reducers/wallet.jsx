import { SITE_WALLET } from '../actions';

const INITIAL_STATE = {
  dinheiro: [],
  contas: [],
  editor: false,
  idToEdit: 0,
};

const siteWalletReducer = (state = INITIAL_STATE, money) => {
  switch (money.type) {
  case SITE_WALLET:
    return { ...state, ...money.value };
  default: return state;
  }
};

export default siteWalletReducer;
