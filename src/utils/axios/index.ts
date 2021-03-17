import { processHTTPJSONResponseBy } from "./httpResponse";
import instance from "./config";
class Axios {

    public getData(url: any) {
        return processHTTPJSONResponseBy(instance.get(url));
    }

    public postData(url: any, body?: any, statusData?: boolean) {
        if (body) {
            return processHTTPJSONResponseBy(instance.post(url, body));
        } else {
            return processHTTPJSONResponseBy(instance.post(url));
        }
    }

}

export default new Axios();