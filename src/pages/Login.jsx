import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setEnter } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    buttonEnterDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      this.setState({ buttonEnterDisabled: !this.submitButton() });
    });
  };

  submit = (email) => {
    const emailOk = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
    return emailOk.test(email);
  };

  senha = (password) => {
    const minCharacters = 6;
    return password.length >= minCharacters;
  };

  submitButton = () => {
    const { email, password } = this.state;
    return this.submit(email) && this.senha(password);
  };

  logIn = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(setEnter(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, buttonEnterDisabled } = this.state;
    return (
      <div>
        <div>
          <p>
            Login
          </p>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <button
            type="button"
            onClick={ this.logIn }
            disabled={ buttonEnterDisabled }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  push: PropTypes.func.isRequired,
};

export default connect()(Login);
