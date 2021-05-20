import axios from 'axios';
import ApiConstants from '../../api/ApiConstants';

const header: string[][] = [
    ['Accept', 'application/json'],
    ['Content-Type', 'application/json'],
];

const instance = axios.create({
    responseType: 'json',
    headers: header,
});

instance.interceptors.request.use(async (req) => {    
    // const accessToken = localStorage.getItem('access_token') ? localStorage.getItem('access_token') :'';
    // req.headers.Authorization = 'Bearer ' + accessToken;
    req.headers.locale = 'en';
    req.headers.domain = ApiConstants.BASE_URL;
    return req;
});

instance.interceptors.response.use((response) => {
    return response;
    
},
    async (error) => {
        console.log('ERRRRRROR======>',error.response);
        return error.response;
        
        // const originalRequest = error.config;
        // console.log('NETWORK ERROR',error); 
        // if(error=='Error: Network Error'){

        // } else {
        //     if (error.response.status === 401 ) {   

        //         console.log('401 ERROR',error.config); 
        //         await localStorage.removeItem('access_token'); 
        //         const url = ApiConstants.BASE_URL + ApiConstants.AUTH_LOGIN;
        //         const grantType = "refresh_token";
        //         const userType = "admin"; 
        //         const refreshToken = await localStorage.getItem('refresh_token');        
        //         return axios.post(
        //             url, {  grant_type: grantType, refresh_token: refreshToken,user_type:userType}
        //         ).then(
        //             async (res) => {                    
        //                 if (res.status === 200) {  
                            
        //                     console.log('401 ERROR RESPONSE : ',res);
    
        //                     await localStorage.setItem('access_token',res.data.data.access_token);
        //                     await localStorage.setItem('refresh_token',res.data.data.refresh_token);
    
        //                     axios.defaults.headers.common.Authorization = `Bearer ${res.data.data.access_token}`;
                            
        //                     return instance(originalRequest);
        //                 }
        //                 return null;
        //             }
        //         );
        //     } else {
        //         return error.response.data
        //     }
        // }
    });

export default instance;
