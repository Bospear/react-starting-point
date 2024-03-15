import axios from 'axios'
import { GetToken, RemoveCookie } from '../CookieHelper';


export class Api_Helper{
    
    domain:string = process.env.REACT_APP_IS_LOCAL ? 'http://' + window.location.hostname + ':8000': 'https://' + window.location.hostname + ':8443'
    
    get(url:string, appendToken:boolean, token:string | undefined=undefined, config?:object)
    {
        if(appendToken)
        {
            //Barrer token should go here
            axios.defaults.headers.common['Authorization'] = token?(token):(GetToken());
        }
        const promise = axios.get(this.domain + url,config)
        const dataPromise = promise.then((response) => response.data)
        return dataPromise
    }

    post(url:string,appendToken:boolean, data?:object, redirectOnError:boolean = true, config?:object)
    {
        if(appendToken)
        {
            //Barrer token should go here
            axios.defaults.headers.common['Authorization'] = GetToken();
        }
        const promise = axios.post(this.domain + url, data)
        const dataPromise = promise.then((response) => {return response}).catch((error)=>{
            if(redirectOnError)
            {
                RemoveCookie();
                window.location.href = window.location.origin + "/login";
            }
            else{
                return error.response
            }
        })
        return dataPromise
    }
    async patch(url:string,appendToken:boolean, data?:object, redirectOnError:boolean = true, config?:object)
    {
        if(appendToken)
        {
            //Barrer token should go here
            axios.defaults.headers.common['Authorization'] = GetToken();
            const promise = axios.patch(this.domain + url, data)
            const dataPromise = promise.then((response) => {return response}).catch((error)=>{
            if(redirectOnError)
            {
                RemoveCookie();
                window.location.href = window.location.origin + "/login";
            }
            else{
                return error.response
            }
        })
        return dataPromise
        }
    }
    async put()
    {

    }
    async fetch()
    {

    }
    
}