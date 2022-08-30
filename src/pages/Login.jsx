import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  validations = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  buttonSubmit = () => {
    preventDefault();
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(ativar(email));
    dispatch(validar());
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;

    const validarEmail = 'alguem@alguem.com';
    const characterMinlength = 6;
    const validarSenha = password.length > characterMinlength;

    const desabilitado = !(validarEmail && validarSenha);

    return (
      <div>
        <form onSubmit={ this.buttonSubmit }>
          <input
            type="text"
            value={ email }
            onChange={ this.validado }
            data-testid="email-input"
          />
          <input
            type="text"
            value={ password }
            onChange={ this.validations }
            data-testid="password-input"
          />
          <button
            disabled={ desabilitado }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
  push: PropTypes.func.isRequired,
};

export default connect()(Login);
