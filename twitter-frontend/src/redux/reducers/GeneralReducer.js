// import ReduxActionEnum from '../../models/ReduxActionEnum';

import generalInitialState from "../states/GeneralInitialState";

const GeneralReducer = (state = generalInitialState, action) => {
   switch (action.type) {
      // case ReduxActionEnum.LOGIN_ACTION:
      //    return {
      //       loggedIn: true,
      //       loggedUser: action.payload,
      //    };

      // case ReduxActionEnum.LOGOUT_ACTION:
      //    return {
      //       loggedIn: false,
      //       loggedUser: {},
      //    };

      default:
         return state;
   }
};

export default GeneralReducer;
