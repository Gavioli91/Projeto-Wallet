import { React, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  purchases = (expense) => (
    expense.reduce((acc, money) => {
      const { currency } = money;
      return acc + (money.value * money.coinValue[currency].ask);
    }, 0)
  );

  render() {
    const { email, expense } = this.props;
    const total = expense.length === 0 ? 0 : this.purchases(expense);

    return (
      <header>
        <h2 data-testid="email-field">{ email }</h2>
        <h2 data-testid="total-field">{ total.toFixed(2) }</h2>
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
