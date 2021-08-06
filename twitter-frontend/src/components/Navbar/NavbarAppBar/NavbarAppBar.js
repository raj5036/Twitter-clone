import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { Component } from 'react';

import AwirosLogo from '../../../assets/images/awiros_logo_reg.svg'
import NavbarAppBarStyles from './NavbarAppBarStyles';
import NavbarConfig from '../NavbarConfig';
import clsx from 'clsx';
import withStyles from '@material-ui/core/styles/withStyles';

let styles = NavbarAppBarStyles;

class NavbarAppBar extends Component {
  static defaultProps = {
    drawerOpen: false,
    handleDrawerToggle: () => null,
  };
  constructor(props) {
    super(props);
    this.state = {
      accountMenuAnchorEl: null,
    };
  }

  setAccountMenuAnchorEl = (accountMenuAnchorEl) => {
    this.setState({ accountMenuAnchorEl });
  };

  handleAccountMenuOpen = (event) => {
    this.setAccountMenuAnchorEl(event.currentTarget);
  };

  handleAccountMenuClose = () => {
    this.setAccountMenuAnchorEl(null);
  };

  render() {
    let { classes, /*width*/ } = this.props;

    // const isMobileBrowser = width === 'xs';

    // const accountMenuId = 'account-menu';
   

    const { appBarVariant } = NavbarConfig;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar)}
          // color="default"
        >
          <Toolbar variant={appBarVariant}>
            
            <Typography variant="h6">GROUND REPORT GENERATOR</Typography>
            
            <div className={classes.grow} />

            <div className={classes.buttonsContainer}>
              <img
                src={AwirosLogo}
                alt="AwirosLogo"
              />
            </div>
          </Toolbar>
        </AppBar>
        
      </div>
    );
  }
}

export default withStyles(styles)(NavbarAppBar);
