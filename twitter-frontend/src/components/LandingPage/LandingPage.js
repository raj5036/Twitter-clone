import 'react-image-gallery/styles/css/image-gallery.css';

import {
  AppBar,
  Button,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { Component } from 'react';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ImageGallery from 'react-image-gallery';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import LandingPageStyles from './LandingPageStyles';
import { toast } from 'material-react-toastify';
import withStyles from '@material-ui/core/styles/withStyles';

let styles = LandingPageStyles;

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  render() {
    let { classes } = this.props;
    
    return (
          <></>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LandingPage);
