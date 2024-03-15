import axios from 'axios'
import {Api_Helper} from './ApiHelper'
import { SetToken, DecodeToken, GetToken } from '../CookieHelper';



export class Apis{

    public getUser():Promise<string>{
        const promise = axios.get('/users/')
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }
    static postLogin(email:string, password:string){
        
        const api_helper = new Api_Helper()
        let data:object = {
            'email': email,
            'password': password
          }
        let data_promise = api_helper.post('/auth/login/', false, data, false).then(function (data:any){return data;});
        return data_promise;
    }
    static getSheet(){
        let token = GetToken();
        let decodedToken:any = DecodeToken(token);
        let id = decodedToken.user_id;
        const api_helper = new Api_Helper();
        const dataPromise = api_helper.get(`/dndsheet/user/${id}/`, true).then(function (data:any){console.log(data)});
        return dataPromise;
    }
    static postSheet(data:JSON){
        let token = GetToken();
        let decodedToken:any = DecodeToken(token);
        let id = decodedToken.user_id;
        const api_helper = new Api_Helper();
        let data_promise = api_helper.post(`/dndsheet/user/${id}/`, true, data, false).then(function (data:any){console.log(data)});
        return data_promise;
    }
    static getSheetByName(){
        let token = GetToken();
        let decodedToken:any = DecodeToken(token);
        let id = decodedToken.user_id;
        const api_helper = new Api_Helper();
        const data_promise = api_helper.get(`/dndsheet/user/names/${id}/`, true).then(function (data:any){return data;});
        return data_promise;
    }
    static getCharacterByName(name:string){
        let token = GetToken();
        let decodedToken:any = DecodeToken(token);
        let id = decodedToken.user_id;
        const api_helper = new Api_Helper();
        const data_promise = api_helper.get(`/dndsheet/${id}/${name}/`, true).then(function (data:any){return data;});
        return data_promise;
    }
}
