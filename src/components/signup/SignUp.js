import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import injectSheet from 'react-jss';

import { Header } from '../layout';
import SignUpForm from './SignUpForm';

import { authActions } from '../../_actions';

const actionCreators = {
  signUp: authActions.signUp,
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(values) {
    const { actions, history } = this.props;

    console.log('history', history);

    actions.signUp(
      values.name,
      values.email,
      values.password,
      values.confirm,
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Header pageTitle="Sing Up" />
        <div className={classes.singUp}>
          <div className={classes.formWrap}>
            <SignUpForm onSubmit={this.onSubmitHandler} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  singUp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 64px)',
  },
  formWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '419px',
    width: '413px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1)',
  },
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default compose(
  injectSheet(styles),
  connect(
    null,
    mapDispatchToProps,
  ),
  withRouter,
)(SignUp);
