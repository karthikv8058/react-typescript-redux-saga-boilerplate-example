/* App config for apis
 */
// /api/1.0/admin/amoulet/list
const ApiConstants = {
    BASE_URL: 'http://demo.mypits.org:15020/',
    //BASE_URL: 'http://localhost:81/',
    AUTH_LOGIN: 'api/1.0/user/auth_login',
    USER_LIST: 'api/1.0/user/list',
    // AMOULET_LIST: 'api/1.0/amoulet/jewel-list',
    AMOULET_LIST: 'api/1.0/admin/amoulet/list',
    GEN_CONFIG: 'api/1.0/general/configuration',
    CREATE_AMOULET: 'api/1.0/amoulet/new',
    GET_CODE: 'api/1.0/amoulet/get-code/',
    VALIDATE_NFC_SERIAL: 'api/1.0/amoulet/validate/',
    STORY_LIST: 'api/1.0/story/get'
};
export default ApiConstants;