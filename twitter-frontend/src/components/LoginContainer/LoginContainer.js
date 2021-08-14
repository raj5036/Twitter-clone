import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import GenUtil from '../../util/GenUtil';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LoginContainerStyles from './LoginContainerStyles';
import RoutePath from '../../lib/RoutePath';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import UserActions from '../../redux/actions/UserActions';
import UserService from '../../services/UserService';
import { connect } from 'react-redux';
import { toast } from 'material-react-toastify';
import withStyles from '@material-ui/core/styles/withStyles';

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
    if(!email || !password){
      toast.error('All fields are necessary');
      return;
    }
    const response = await UserService.login({ email, password });
    
    if (response.success) {
      toast.success(response.message);
      GenUtil.setAccessToken(response.data.token);
      console.log(response.data);
      this.props.loginUser(response.data);
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
      <div className={classes.root}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
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
          </div>
        </Container>
      </div>
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
