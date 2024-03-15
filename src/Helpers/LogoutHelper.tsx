import { RemoveCookie } from "./CookieHelper";


const Logout = () => {
    
   
    RemoveCookie();
    
    window.location.href = window.location.origin + "/login";
}

export default Logout;