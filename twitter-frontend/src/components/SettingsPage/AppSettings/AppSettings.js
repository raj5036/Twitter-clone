import React, { Component } from 'react';

import AppSettingsStyles from './AppSettingsStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import SettingsActions from '../../../redux/actions/SettingsActions';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';

let styles = AppSettingsStyles;

class AppSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isTouchlessMode:false
    };
  }

  handleTouchlessChange = () => {
    let { isTouchlessMode, setTouchlessMode } = this.props;
    setTouchlessMode(!isTouchlessMode);
  };

  handleDarkModeChange = () => {
    let { isDarkMode, setDarkMode } = this.props;
    setDarkMode(!isDarkMode);
  };

  render() {
    let { classes, isTouchlessMode, isDarkMode } = this.props;
    // console.log(isTouchlessMode);
    return (
      <Card className={classes.root} elevation={0}>
        <CardHeader title="App Settings " />

        <CardContent>
          <FormGroup row>
            {/* <FormControlLabel
              control={
                <Switch
                  // name="isTouchlessMode"
                  checked={isTouchlessMode}
                  onChange={this.handleTouchlessChange}
                  color="primary"
                />
              }
              label="Touchless Mode"
            /> */}

            <FormControlLabel
              control={
                <Switch
                  name="isDarkMode"
                  checked={isDarkMode}
                  onChange={this.handleDarkModeChange}
                  color="primary"
                />
              }
              label="Dark Mode(Beta)"
            />
          </FormGroup>
        </CardContent>
      </Card>
    );
  }
}

let mapStateToProps = (state) => {
  // console.log(state);
  return {
    isTouchlessMode: state.SettingsReducer.isTouchlessMode,
    isDarkMode: state.SettingsReducer.isDarkMode,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setTouchlessMode: (value) =>
      dispatch(SettingsActions.setTouchlessMode(value)),
    setDarkMode: (value) => dispatch(SettingsActions.setDarkMode(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AppSettings));
