import React, { Component } from 'react';

import AppContainerStyles from './AppContainerStyles';
import LandingPage from '../LandingPage/LandingPage';
import NavbarAppBar from '../Navbar/NavbarAppBar/NavbarAppBar';
import SettingsActions from '../../redux/actions/SettingsActions';
import UserActions from '../../redux/actions/UserActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

let styles = AppContainerStyles;

class AppContainer extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavbarAppBar/>
        <LandingPage/>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    loggedIn: state.UserReducer.loggedIn,
    loggedUser: state.UserReducer.loggedUser,
    isDarkMode: state.SettingsReducer.isDarkMode,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(UserActions.loginUser(data)),
    setDarkMode: (value) => dispatch(SettingsActions.setDarkMode(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(AppContainer)));
