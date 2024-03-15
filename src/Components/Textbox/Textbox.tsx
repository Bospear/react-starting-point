import TextField from '@mui/material/TextField';
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";

const Textbox:React.FC<{label:string, onChange:any, permission?:string}> = observer(({label, onChange, permission = undefined}) => {
    const {styleStore} = useStores();
    return (
        <TextField onChange={onChange} fullWidth
        InputLabelProps={{style : {color : styleStore.getForegroundPrimaryColor()}}} label={label} sx={{borderColor:styleStore.getBoarderColor(), color:styleStore.getForegroundPrimaryColor(),
                input: {
                    color: styleStore.getForegroundPrimaryColor(),
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: `0 0 0 1000px ${styleStore.getBackgroundPrimaryColor()} inset`,
                        WebkitTextFillColor: styleStore.getForegroundPrimaryColor()
                      },
                  },
                '& .MuiOutlinedInput-root': {
                '& fieldset': {
                borderColor: styleStore.getBoarderColor(),
                },
                '&:hover fieldset': {
                    borderColor: styleStore.getForegroundPrimaryColor(),
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: styleStore.getForegroundPrimaryColor(),
                  },
                },
            }}/>
                
    )
})
export default Textbox;