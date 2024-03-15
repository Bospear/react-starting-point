import { useState } from "react";
import LineTextbox from "../../Components/Textbox/LineTextbox";
import Logo from "../../Components/Images/Logo"
import {Box} from "@mui/material"
import Subtitle from "../../Components/Text/Subtitle"
import Link from '@mui/material/Link';
import PrimaryButton from "../../Components/Button/PrimaryButton";
import LinePasswordbox from "../../Components/Textbox/LinePasswordbox";

const Landscape = (params:any) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")  
    return(
        <>        
        <Box sx={{display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', mt:"2%"}}>
         <Box sx={{mb:"2%", width:"30%"}}>   
        <Logo/>
        </Box>
        <Subtitle text={'Please Sign In'}/>
        <Box sx={{mt:"2%", width:"30%"}}>
        <LineTextbox text={"Email Address"} required
        error = {params.formDataErrors.email}
        onChange={
            (e:any) => {setEmail(e.target.value)
        }}
        onKeyDown={(e:any) => {
            if (e.key === "Enter") {
                params.handleLogin(email,password)
            }
          }}
        />
        </Box>
        <Box sx={{mt:"2%", width:"30%"}}>
        <LinePasswordbox text={"Password"} 
        error = {params.formDataErrors.password}
        onChange={
            (e:any) => {setPassword(e.target.value)
        }}
        onKeyDown={(e:any) => {
            if (e.key === "Enter") {
                params.handleLogin(email,password)
            }
          }}
          />
        </Box>
        <Box sx={{mt:"3%", width:"30%"}}>
            <PrimaryButton text="Sign In" onClick={() => params.handleLogin(email,password)}/>
        </Box>
        <Box sx={{mt:"2%"}}>
            <Link href="#">Forgot password?</Link>
        </Box>
        </Box>
        </>
    )
}

export default Landscape;