import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import EditPurchase from '../components/EditPurchase';

class Wallet extends Component {
  render() {
    const { change } = this.props;
    return (
      <div>
        <Header />
        { change ? <EditPurchase /> : <WalletForm /> }
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  change: state.wallet.change,
});

Wallet.propTypes = {
  change: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Wallet);
