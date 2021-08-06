import APIPath from '../lib/APIPath';
import APIServices from './serviceHelpers/APIServices';
import GenUtil from '../util/GenUtil';
import { getHost } from '../lib/Constants';

class GeneralService {
  static async logout(data = {}) {
    const axiosConfig = {
      url: `${getHost()}${APIPath.logoutPath}`,
      method: 'POST',
      crossDomain: true,
      dataType: 'json',
      headers: await GenUtil.getHeaders(),
      cache: false,
      processData: false,
      data: JSON.stringify(data),
    };
    // console.log(axiosConfig)
    let sr = await APIServices.request(axiosConfig);
    if (sr.success) {
      GenUtil.removeAccessToken();
    }
    return sr;
  }
}

export default GeneralService;
