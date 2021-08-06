import ReduxActionEnum from '../../models/ReduxActionEnum';

let SettingsActions = {
   setDarkMode: (value) => {
      return {
         type: ReduxActionEnum.SET_DARK_MODE,
         payload: value,
      };
   },
};

export default SettingsActions;
