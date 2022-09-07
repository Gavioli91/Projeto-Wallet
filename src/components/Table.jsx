import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    const { expenses } = this.props;
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
                  <td>Editar/Excluir</td>
                  <td>
                    {(Number(exchange) * value).toFixed(2)}
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

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Table);
