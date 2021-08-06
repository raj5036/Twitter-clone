import { Divider, Grid } from '@material-ui/core';
import React, { Component } from 'react';

import AppSettings from './AppSettings/AppSettings';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import SettingsPageStyles from './SettingsPageStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import withStyles from '@material-ui/core/styles/withStyles';

let styles = SettingsPageStyles;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && (
        <Box>
          {/*<Box p={3}>*/}
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
    };
  }

  handleTabChange = (event, newValue) => {
    this.setState({ tabValue: newValue });
    // setValue(newValue);
  };

  render() {
    let { classes } = this.props;
    let { tabValue } = this.state;
    return (
      <div className={classes.root}>
        {/*SettingsPage*/}
        <Grid component={Paper} container direction="row">
          <Grid item xs={3}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={tabValue}
              onChange={this.handleTabChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="App Settings" {...a11yProps(0)} />
              {/* <Tab label="New Registration" {...a11yProps(1)} /> */}
              {/* <Tab label="Registered Objects" {...a11yProps(2)} /> */}
            </Tabs>
          </Grid>
          <Grid item>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={8}>
            <TabPanel value={tabValue} index={0}>
              <AppSettings />
            </TabPanel>
            {/* <TabPanel value={tabValue} index={1}>
               <NewRegistrationComponent/>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
               <AllRegisteredObjectsContainer/>
            </TabPanel> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(SettingsPage);
