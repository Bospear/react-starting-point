import Cookies from 'universal-cookie';
import { decodeToken } from "react-jwt";

const cookies = new Cookies();
    export function GetToken()
    {
        const cookies = new Cookies();
        try{
            let token = cookies.get('tokens');
            return token
        }catch(e){
            console.error(e);
        }
    }
    export function SetToken(token:any)
    {
        cookies.set('tokens', token);
    }
    export function DecodeToken(token:any):any
    {
        return decodeToken(token);
    }
    export function RemoveCookie()
    {
        cookies.remove('tokens');
    }
    export function SetStyle(light_mode:boolean)
    {
        cookies.remove('style');
        cookies.set('style', light_mode);
    }
    export function GetStyle()
    {
        return cookies.get('style');
    }
