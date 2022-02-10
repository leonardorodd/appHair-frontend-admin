/* import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import * as S from './Recuperacao.style';

class RecuperacaoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
      },
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.username && user.password) {
      this.props.recuperation(user);
    }
  }
  componentDidMount() {
    document.body.style.backgroundColor = 'rgb(219, 219, 219)';
  }
  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="ColBoxRecuperaAcesso">
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
            <S.TitleBoxPanel>Insira o E-mail cadastrado</S.TitleBoxPanel>
            <S.InputForm
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={this.handleChange}
              placeholder="email@seudominio.com"
              required
            />
            {submitted && !user.email && (
              <div className="help-block">O campo "E-MAIL" não está em um formato válido.</div>
            )}
          </div>
          <S.FormEntrar className="form-group">
            <S.ButtonLogin className="btn btn-primary">Recuperar</S.ButtonLogin>
            {registering && (
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            )}
            <Link to="/login" className="btn btn-link">
              Voltar
            </Link>
          </S.FormEntrar>
        </form>
      </div>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  recuperation: userActions.recuperation,
};

const connectedRecuperacaoPage = connect(mapState, actionCreators)(RecuperacaoPage);
export { connectedRecuperacaoPage as RecuperacaoPage };
 */
