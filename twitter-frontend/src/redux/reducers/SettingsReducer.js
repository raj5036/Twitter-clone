import ReduxActionEnum from '../../models/ReduxActionEnum';
import SettingsInitialState from '../states/SettingsInitialState';

const SettingsReducer = (state = SettingsInitialState, action) => {
  let config = JSON.parse(localStorage.getItem('config'));
  switch (action.type) {
    case ReduxActionEnum.SET_DARK_MODE:
      localStorage.setItem(
        'config',
        JSON.stringify({
          ...config,
          isDarkMode: action.payload,
        })
      );
      return {
        ...state,
        isDarkMode: action.payload,
      };

    default:
      return state;
  }
};

export default SettingsReducer;
