import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import Button from "@mui/material/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"



const LinePasswordbox = observer((params:any) => {
    const [isVisible, setIsVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsVisible(!isVisible);
      };
    const {styleStore} = useStores();
    return (
    <>
    <TextField 
        id="standard-basic" 
        label={params.text} 
        variant="standard" 
        fullWidth
        focused
        type={isVisible?("text"):("password")}
        required
        error = {params.error}
        onChange={params.onChange}
        onKeyDown={params.onKeyDown}
        sx={{input: {
          color: styleStore.getForegroundPrimaryColor(),
          background: styleStore.getBackgroundPrimaryColor(),
          "&:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 1000px ${styleStore.getBackgroundPrimaryColor()} inset`,
              WebkitTextFillColor: styleStore.getForegroundPrimaryColor()
            },
           
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: styleStore.getUnderline(),
          
        },
        caretColor: styleStore.getForegroundPrimaryColor()
      }}
        InputLabelProps={{style : {color : styleStore.getLabel()}}}
        InputProps={{
            endAdornment: (
              <Button  onClick={togglePasswordVisibility}>
                {isVisible?(<VisibilityIcon sx={{color:styleStore.getLabel()}}/>):(<VisibilityOffIcon sx={{color:styleStore.getLabel()}}/>)}
              </Button>
            ),
          }}
          />
          </>)
})

export default LinePasswordbox;