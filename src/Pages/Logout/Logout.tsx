import { RemoveCookie } from "../../Helpers/CookieHelper";
import { useStores } from "../../Helpers/MobX/hooks";

const Logout = () => {
    const {userStore} = useStores();
    userStore.reset();
    RemoveCookie();
    
    window.location.href = window.location.origin + "/";
    return(
        <></>
    )
}

export default Logout;