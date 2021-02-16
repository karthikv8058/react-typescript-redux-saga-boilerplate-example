import Swal from 'sweetalert2';

export const processHTTPJSONResponseBy = (response: any, statusData?: boolean): Promise<any> => new Promise((resolve, reject) => {
    if (response) {
        return response.then((resp: any) => {
            if(resp==undefined){
                console.log('undefined error response');
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please check your internet connection',
                  })
            }else{

                if (resp.error) {
                    reject(resp.message);
                } else if(resp.data.data === 'No data provided'){
                    resolve(resp.data);
                }else {
                    resolve(resp.data.data);
                }

            }
        });
    } else {
        // return (Language.validation.noResponse);
        const serverError = { en: 'Server error' }
        reject(serverError);
    }
});
