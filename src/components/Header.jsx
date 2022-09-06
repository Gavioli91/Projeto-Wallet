import { React, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expense } = this.props;
    const coin = expense.map((item) => {
      const { value, currency, exchangeRates } = item;
      const { ask } = exchangeRates[currency];
      return ask * value;
    });
    let total = expense.length > 0
      ? Math.round(coin.reduce((acc, curr) => acc + curr) * 100) / 100
      : 0;
    if (total === 0) {
      total = '0.00';
    }
    return (
      <header>
        <h2 data-testid="email-field">{ email }</h2>
        <h2 data-testid="total-field">{ total }</h2>
        <h2 data-testid="header-currency-field">BRL</h2>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expense: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Header);
