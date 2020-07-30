export const processHTTPJSONResponseBy = (response: any, statusData?: boolean): Promise<any> => new Promise((resolve, reject) => {
    if (response) {
        return response.then((resp: any) => {
            if (resp.error) {
                reject(resp.message);
            } else {
                resolve(resp.data.data);
            }
        });
    } else {
        // return (Language.validation.noResponse);
        const serverError = { en: 'Server error' }
        reject(serverError);
    }
});
