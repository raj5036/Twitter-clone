import GeneralReducer from './GeneralReducer';
import SettingsReducer from './SettingsReducer';
import UserReducer from './UserReducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  UserReducer,
  GeneralReducer,
  SettingsReducer,
});

export default RootReducer;
