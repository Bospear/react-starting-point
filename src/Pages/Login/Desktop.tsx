import React from "react";
import { useState } from "react";
import LineTextbox from "../../Components/Textbox/LineTextbox";
import Logo from "../../Components/Images/Logo"
import {Box} from "@mui/material"
import Subtitle from "../../Components/Text/Subtitle"
import Link from '@mui/material/Link';
import PrimaryButton from "../../Components/Button/PrimaryButton";
import BasicText from "../../Components/Text/BasicText";
import LinePasswordbox from "../../Components/Textbox/LinePasswordbox";

const Desktop = (params:any) => {
    

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")    
    

    
    return(
        <>        
        <Box sx={{display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', mt:"6%"}}>
         <Box sx={{mb:"1%", width:"3%"}}>   
        <Logo/>
        </Box>
        <Subtitle text={'Please Sign In'}/>
        <Box sx={{mt:"6%", width:"18%"}}>
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
        <Box sx={{mt:"1%", width:"18%"}}>
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
        <Box sx={{mt:"4%", width:"13%"}}>
            <PrimaryButton text="Sign In" onClick={() => params.handleLogin(email,password)}/>
        </Box>
        <Box sx={{mt:"1%"}}>
            <Link href="#">Forgot password?</Link>
        </Box>
        </Box>
        </>
    )
}

export default Desktop;