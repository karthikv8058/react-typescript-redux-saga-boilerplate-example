const apiVersion = 'api/1.0/';
const DEV = 15020;
const UAT = 15021;
const TEST = 15022;

const ApiConstants = {

  BASE_URL: `http://demo.mypits.org:${UAT}/`,
  //BASE_URL: 'http://localhost:81/', // LOCAL

  AUTH_LOGIN: apiVersion + "user/auth_login",
  USER_LIST: apiVersion + "user/list",
  AMOULET_LIST: apiVersion + "admin/amoulet/list",
  GEN_CONFIG: apiVersion + "general/configuration",
  CREATE_AMOULET: apiVersion + "admin/amoulet/new",
  GET_CODE: apiVersion + "admin/amoulet/get-code/",
  VALIDATE_NFC_SERIAL: apiVersion + "admin/amoulet/validate/",
  STORY_LIST: apiVersion + "story/get",
  ADD_DESCRIPTIONS: apiVersion + "admin/add-descriptions",
  LIST_DESCRIPTIONS: apiVersion + "admin/list-descriptions",
  DASHBOARD: apiVersion + "admin/dashboard",

};
export default ApiConstants;
