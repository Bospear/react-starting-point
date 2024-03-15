import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"

const LineTextbox = observer((params:any) => {
    const { styleStore } = useStores();
    return (
    <TextField id="standard-basic" 
    label={params.text}
    variant="standard"
    focused
    fullWidth required={params.required}
    onChange={params.onChange}
    onKeyDown={params.onKeyDown}
    error={params.error}
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
    />)
})

export default LineTextbox;