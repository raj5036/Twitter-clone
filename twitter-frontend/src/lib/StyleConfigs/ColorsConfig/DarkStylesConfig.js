import CommonColorsConfig from './CommonColorsConfig';
import CommonStylesConfig from '../CommonStylesConfig';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

let DarkStylesConfig = createMuiTheme({
  palette: {
    ...CommonColorsConfig,
    type: 'dark',
    primary: {
      main: '#90caf9',
      light: 'rgb(166, 212, 250)',
      dark: 'rgb(100, 141, 174)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: '#f48fb1',
      light: 'rgb(246, 165, 192)',
      dark: 'rgb(170, 100, 123)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#424242',
      default: '#121212',
      level2: '#333',
      level1: '#212121',
    },
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  },
  ...CommonStylesConfig,

  nprogress: {
    color: '#fff',
  },
});

export default DarkStylesConfig;
