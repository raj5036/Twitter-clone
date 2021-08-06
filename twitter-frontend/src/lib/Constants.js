let getHost = () => {
   if (process.env.NODE_ENV === 'development') {
      return window.AwirosDeploymentConf.getDevelopmentHost()
   } else if (process.env.NODE_ENV === 'production') {
      return window.AwirosDeploymentConf.getProductionHost()
   }
};

let getSocketHost = () => {
   if (process.env.NODE_ENV === 'development') {
      return window.AwirosDeploymentConf.getDevelopmentSocketHost()
   } else if (process.env.NODE_ENV === 'production') {
      return window.AwirosDeploymentConf.getProductionSocketHost()
   }
};


let Globals = {
   connectMessaging: window.AwirosDeploymentConf.connectMessaging,
   offline: window.AwirosDeploymentConf.offline,
   liveDataFetchingRate: window.AwirosDeploymentConf.liveDataFetchingRate,
   socketURL: getSocketHost(),
};

export {getHost, Globals};
