window.AwirosDeploymentConf = {
   getDevelopmentHost: () => {
      return 'http://192.168.0.147:3000'
   },
   getProductionHost: () => {
      return `http://${window.location.hostname}:3000`
   },


   getDevelopmentSocketHost: () => {
      return 'http://192.168.0.147:3000'
   },
   getProductionSocketHost: () => {
      return `http://${window.location.hostname}:3000`
   },


   connectMessaging: true,
   offline: true,
   liveDataFetchingRate:10000
};
