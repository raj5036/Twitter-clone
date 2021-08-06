import Axios from 'axios';
import ServiceResponse from './ServiceResponse';

class APIServices {
  static async request(axiosConfig) {
    try {
      const response = await Axios.request(axiosConfig);
      // console.log('API SERVICES RESPONSE', response);
      // console.log(response.data.success);
      if (response.data.success) {
        // console.log('calling service response');
        return ServiceResponse.success(
          response.data.msg,
          response.data.token || response.data.data
        );
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.log('api calling error', axiosConfig);
          console.log(response.data);
        }
        return ServiceResponse.error(response.data.msg);
      }
    } catch (e) {
      if (e.response) {
        console.log('api services error', e);
        return ServiceResponse.error('Connection timed out');
        // return ServiceResponse.error(e.response.data.msg)
      } else {
        return ServiceResponse.error('The connection timed out');
      }
    }
  }
}

export default APIServices;
