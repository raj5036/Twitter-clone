class APIPath {
   // static addUserPath = '/user';
   // static editUserPath = (id = ':id') => `/user/${id}`;

   static loginPath = '/auth/login';
   static logoutPath = '/api/logout';
   static saveFCMToken = '/api/save_fcm_token';

   static getGridHeaders = '/api/get_grid_headers';
   static getPreferredGridHeaders = '/api/get_preferred_grid_headers';
   static getParticularEvent = '/api/get_particular_event';
   static getEvents = '/api/get_events';
   static previewEvents = '/api/preview_events';
   static getListOfCameras = '/api/list_of_cameras';

   static appStack = '/api/awiros_app_store';
   static appStackDeveloperList = '/api/app_stack_developer_list';
   static listOfTargetIndustries = '/api/list_of_target_industries';
   static filterAwirosAppStack = '/api/filter_awiros_app_stack';
}

export default APIPath;
