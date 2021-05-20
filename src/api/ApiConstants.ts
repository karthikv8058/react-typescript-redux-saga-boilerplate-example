const apiVersion = 'api/1.0/';
const DEV = 15020;
const UAT = 15021;
const TEST = 15022;

const ApiConstants = {

  BASE_URL: `http://demo.mypits.org:${DEV}/`,
  //BASE_URL: 'http://localhost:81/', // LOCAL
  // /api/1.0/admin/get-order-details

  ENABLE_USER: apiVersion + "user/enable",
  VERIFY_TOKEN: apiVersion + "user/verify-token",

};
export default ApiConstants;
