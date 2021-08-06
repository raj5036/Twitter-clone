class RoutePath {
   static loginPath = '/login';
   static homePath = "/";

   static settingsPath = '/settings';

   static landingPagePath = '/landing';
   static detailedList = (id = ':id') => `/stats/${id}`;

   static navigateTo(props, path) {
      props.history.push(path);
   }
}

export default RoutePath;
