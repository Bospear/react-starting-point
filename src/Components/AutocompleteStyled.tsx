import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useStores } from "../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";
import { Paper } from '@mui/material';

const AutocompleteStyled:React.FC<{label:string, onChange:any, options:Array<any>, permission?:string, keyName?:string}> = observer(({label, onChange, options, permission = undefined, keyName=undefined}) => {
    const {styleStore} = useStores();
return (
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={options}
    onChange={onChange}
    PaperComponent={({ children }) => (
        <Paper sx={{backgroundColor: styleStore.getBackgroundPrimaryColor(),color: styleStore.getForegroundPrimaryColor(), border:1, borderColor:styleStore.getBoarderColor(),
       
        }}>{children}</Paper>
      )}
    sx= {{
        '& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected="true"]': {
                backgroundColor: `${styleStore.getButtonPrimaryColor()} !important`,
                color:'white !important',
                "&:hover": {
                    backgroundColor: `${styleStore.getButtonPrimaryColor()} !important`
                },
            },
        '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {          
            color: styleStore.getForegroundPrimaryColor(),
            "&:hover": {
                color:'white',
                backgroundColor: styleStore.getButtonPrimaryColor()
            },
        },
        svg:{color:styleStore.getForegroundPrimaryColor()},
        label: { color:styleStore.getForegroundPrimaryColor() },                    
    }}
    renderInput={(params) => <TextField {...params} label={label}
        sx={{
            color:styleStore.getForegroundPrimaryColor(),
            input: {
                color: styleStore.getForegroundPrimaryColor(),
                "&:-webkit-autofill": {
                    WebkitBoxShadow: `0 0 0 1000px ${styleStore.getBackgroundPrimaryColor()} inset`,
                    WebkitTextFillColor: styleStore.getForegroundPrimaryColor()
                },
            },
            '& label.Mui-focused': {
                color: styleStore.getForegroundPrimaryColor(),
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
            }
        }} />}
        getOptionLabel={option => {return(keyName?(option[keyName]):(option))}}
  />
)
})

export default AutocompleteStyled;