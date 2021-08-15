import React, { Component } from 'react';

import Bird from '../../assets/images/bird.png'
import Button from '@material-ui/core/Button';
import GenUtil from '../../util/GenUtil';
import { Grid } from '@material-ui/core';
import LoginContainerStyles from './LoginContainerStyles';
import RoutePath from '../../lib/RoutePath';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import UserActions from '../../redux/actions/UserActions';
import UserService from '../../services/UserService';
import { connect } from 'react-redux';
import { toast } from 'material-react-toastify';
import withStyles from '@material-ui/core/styles/withStyles';

// import TwitterLoginImage from '../../assets/images/twitter_login_page_image.png';







let styles = LoginContainerStyles;

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount = () => {
    this.checkLoggedIn();
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    this.checkLoggedIn();
  };

  checkLoggedIn = () => {
    if (this.props.loggedIn) {
      RoutePath.navigateTo(this.props, RoutePath.homePath);
    }
  };

  handleLogin = async () => {
    // e.preventDefault();
    let { email, password } = this.state;
    if (!email || !password) {
      toast.error('All fields are necessary');
      return;
    }
    const response = await UserService.login({ email, password });

    if (response.success) {
      toast.success(response.message);
      let { token, userObj } = response.data;
      GenUtil.setAccessToken(token);
      this.props.loginUser(userObj);
      RoutePath.navigateTo(this.props, RoutePath.homePath);
    } else {
      toast.error('Wrong email or password');
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleLogin();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let { classes } = this.props;
    let { email, password } = this.state;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        wrap="wrap"
        className={classes.root}
      >
          <Grid item className={classes.imageContainer}>
            <img
              src={Bird}
              alt="Bird"
            />

          </Grid>
          <Grid item className={classes.paper}>
            <Typography component="h1" variant="h1">
              Happening now
            </Typography>
            <Typography component="h5" variant="h5">
              Join Twitter Today
            </Typography>
            <form
              className={classes.form}
              onSubmit={this.handleSubmit}
              noValidate
            >
              <TextField
                required
                autoFocus
                fullWidth
                margin="normal"
                variant="outlined"
                label="Email Address"
                id="email"
                name="email"
                value={email}
                autoComplete="email"
                onChange={this.handleChange}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Password"
                name="password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={this.handleChange}
              />

              <div style={{ height: this.props.theme.spacing(5) }}></div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </form>
          </Grid>
      </Grid>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    loggedIn: state.UserReducer.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(UserActions.loginUser(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(LoginContainer));
