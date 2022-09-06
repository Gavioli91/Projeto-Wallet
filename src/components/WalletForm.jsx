import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchValueCoins, testApiSuccess } from '../redux/actions';
import { showAllCoins } from '../services/requestApi';

class WalletForm extends Component {
  state = { value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchValueCoins());
  }

  changeState = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitButton = async (event) => {
    event.preventDefault();
    const { value, currency, method, tag, description } = this.state;
    const { dispatch, expense } = this.props;
    const id = expense.length;
    dispatch(testApiSuccess({ value,
      currency,
      method,
      tag,
      description,
      id,
      exchangeRates: await showAllCoins() }));
    this.setState({ value: '',
      description: '',
    });
  };

  render() {
    const { value, currency, method, tag, description } = this.state;

    const { currencies } = this.props;

    // const exchangeKeys = currencies.map((coin) => (
    // <option key={ coin } value={ coin }>{ coin }</option>
    // ));

    return (
      <form>
        <input
          data-testid="value-input"
          type="number"
          name="value"
          value={ value }
          onChange={ this.changeState }
        />

        <input
          data-testid="description-input"
          type="text"
          name="description"
          value={ description }
          onChange={ this.changeState }
        />

        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.changeState }
          >
            { currencies.map((coin) => (
              <option key={ coin } value={ coin }>{ coin }</option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Pagamento:
          <select
            data-testid="method-input"
            name="method"
            id="method"
            value={ method }
            onChange={ this.changeState }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          <select
            data-testid="tag-input"
            id="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.changeState }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="submit"
          onClick={ this.submitButton }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expense: state.wallet.expenses,
});

WalletForm.propTypes = {
  expense: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  dispatch: PropTypes.func.isRequired };

export default connect(mapStateToProps)(WalletForm);
