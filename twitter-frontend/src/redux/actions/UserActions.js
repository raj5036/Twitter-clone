import ReduxActionEnum from '../../models/ReduxActionEnum';

let UserActions = {
   loginUser: userDetails => {
      return {
         type: ReduxActionEnum.LOGIN_ACTION,
         payload: userDetails,
      };
   },

   logoutUser: () => {
      return {
         type: ReduxActionEnum.LOGOUT_ACTION,
         payload: {}, 
      };
   },
};

export default UserActions;
