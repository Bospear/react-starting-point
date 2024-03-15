import { GetToken } from '../CookieHelper';


export class Authenticator{
    static authenticate(){
        try{
            let token = GetToken();
            if(token !== undefined)
            {
                return true
            }else{
                return false
            }
        }catch{
            return false
        }
    }
}