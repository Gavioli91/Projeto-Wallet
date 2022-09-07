import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePurchase } from '../redux/actions';

const lista = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

class Table extends Component {
  tabela = () => (
    <table>
      <tr>
        { lista.map((topo) => <th key={ topo }>{ topo }</th>)}
      </tr>
    </table>
  );

  render() {
    const { expenses, dispatch } = this.props;
    return (
      <div>
        <table>
          { this.tabela() }
          <tbody>
            { expenses.map((coin) => {
              const { description, tag, method, value, id } = coin;
              const exchange = coin.exchangeRates[coin.currency].ask;
              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ Number(coin.value).toFixed(2) }</td>
                  <td>{coin.exchangeRates[coin.currency].name}</td>
                  <td>{Number(exchange).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    {(Number(exchange) * value).toFixed(2)}
                  </td>
                  <td>
                    <button type="button">Editar</button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => dispatch(deletePurchase(coin.id)) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Table);
