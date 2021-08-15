import 'material-react-toastify/dist/ReactToastify.css';
import './assets/fonts/material-fonts/material-fonts.css';
import './assets/fonts/montserrat/montserrat.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import AppContainer from './components/AppContainer/AppContainer';
import AppStyles from './AppStyles';
import { CssBaseline } from '@material-ui/core';
import DarkStylesConfig from './lib/StyleConfigs/ColorsConfig/DarkStylesConfig';
import GenUtil from './util/GenUtil';
import LightStylesConfig from './lib/StyleConfigs/ColorsConfig/LightStylesConfig';
import LoginContainer from './components/LoginContainer/LoginContainer';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import PrivateRoute from './util/PrivateRoute';
import RoutePath from './lib/RoutePath';
import SettingsActions from './redux/actions/SettingsActions';
import { ThemeProvider } from '@material-ui/styles';
import { ToastContainer } from 'material-react-toastify';
import UserActions from './redux/actions/UserActions';
import { connect } from 'react-redux';
import moment from 'moment';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = AppStyles;

const toastConfiguration = {
  autoClose: 2000,
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: 'left',
      loggedIn: undefined,
    };
  }

  componentDidMount = () => {
    moment.locale('en-in');
    // console.log(this.props.loggedUser);
    this.getLocalStorageConfigSettings();
    let token = GenUtil.getAccessToken();
    console.log(`in app `, token);

    this.setState({ loggedIn: this.props.loggedIn });
  };

  getLocalStorageConfigSettings = () => {
    let config = JSON.parse(localStorage.getItem('config'));
    // console.log(config);
    this.props.setDarkMode(!!config?.isDarkMode);
  };

  render() {
    const { classes, isDarkMode } = this.props;
    console.log('isDarkMode', isDarkMode);
    let token = GenUtil.getAccessToken();
    if (this.state.loggedIn === undefined) {
      return <></>;
    } else {
      return (
        <>
          <ThemeProvider
            theme={isDarkMode ? DarkStylesConfig : LightStylesConfig}
          >
            <div className={classes.root}>
              <CssBaseline />
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <BrowserRouter>
                  <Switch>
                    <Route
                      exact
                      path={RoutePath.loginPath}
                      component={LoginContainer}
                    />
                    <PrivateRoute
                      exact
                      path={RoutePath.homePath}
                      authorized={token}
                      component={AppContainer}
                    />
                  </Switch>
                </BrowserRouter>
              </MuiPickersUtilsProvider>
            </div>
          </ThemeProvider>
          <ToastContainer {...toastConfiguration} style={{ marginTop: 40 }} />
        </>
      );
    }
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
)(withStyles(styles)(App));
