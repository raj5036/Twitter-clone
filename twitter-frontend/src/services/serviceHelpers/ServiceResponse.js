class ServiceResponse {
   static error(message, data, httpCode) {
      console.log('sr message',message);
      return {success: false, data: data || {}, message, httpCode: httpCode || 400}
   }

   static success(message, data, httpCode) {
      let sr = {success: true, data: data|| {}, message: message || "", httpCode: httpCode || 200}
      // console.log(sr);
      return sr
   }
}

export default ServiceResponse;
