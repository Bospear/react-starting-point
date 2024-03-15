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

const Mobile = (params:any) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")  
    return(
        <>        
        <Box sx={{display:"flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', mt:"25%"}}>
            <Box sx={{mb:"4%", width:"20%"}}>   
                <Logo/>
            </Box>
        <Subtitle text={'Please Sign In'}/>
        <Box sx={{mt:"20%", width:"70%"}}>
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
        <Box sx={{mt:"4%", width:"70%"}}>
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
        <Box sx={{mt:"15%", width:"70%"}}>
            <PrimaryButton text="Sign In" onClick={() => params.handleLogin(email,password)}/>
        </Box>
        {/* <Box sx={{mt:"5%"}}>
            <Link href="#">Forgot password?</Link>
        </Box> */}
        
        </Box>
        </>
    )
}

export default Mobile;