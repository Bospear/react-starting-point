import { useState } from "react";
import Desktop from "./Desktop"
import Mobile from "./Mobile"
import Landscape from "./Landscape"
import GetScreenType from '../../Helpers/ScreenHelper'
import { Apis } from '../../Helpers/ApiHelper/ApiFactory'
import {useNavigate} from "react-router-dom";
import _isEmpty from "lodash/isEmpty";
import ErrorAlert from "../../Components/Alerts/ErrorAlert";
import ErrorAlertMobile from "../../Components/Alerts/ErrorAlertMobile";
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"
import { SetToken } from "../../Helpers/CookieHelper";


const Login = observer(() => {

    const initFormDataErrors: any = {
        email: false,
        password: false,
      };
    const [formDataErrors, setFormDataErrors] = useState(initFormDataErrors);
    const navigate = useNavigate()

    const isDesktop = GetScreenType().isDesktop;
    const isLaptop = GetScreenType().isLaptop;
    let isDesktopOrLaptop = isDesktop || isLaptop;
    const isPortrait = GetScreenType().isPortrait;
    const { styleStore } = useStores();
    const callLogin = (email:string, password:string) => {
      if(!_isEmpty(email) && !_isEmpty(password))
      Apis.postLogin(email, password).then(function (resp:any){
        if(resp.status !== 200)
        {
          resp?.data?.reason? (isDesktopOrLaptop?(ErrorAlert(resp.data.reason, false)):(ErrorAlertMobile(resp.data.reason, false))):(isDesktopOrLaptop?(ErrorAlert("500", false)):(ErrorAlertMobile("500", false)))
        }
        else{
          SetToken(resp.data['jwt']);
          navigate("/");
          window.location.reload();          
        }
      }).catch((resp:any) => {console.log(resp); });
      };
      
    document.body.style.backgroundColor = styleStore.getBackgroundPrimaryColor();
    document.body.style.color = styleStore.getForegroundPrimaryColor();
    return(
            isDesktopOrLaptop?(<Desktop handleLogin={callLogin} formDataErrors={formDataErrors}/>):(isPortrait?(<Mobile handleLogin={callLogin} formDataErrors={formDataErrors}/>):(<Landscape handleLogin={callLogin} formDataErrors={formDataErrors}/>))
    )
})

export default Login;