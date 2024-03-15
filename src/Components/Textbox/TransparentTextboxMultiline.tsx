import TextField from '@mui/material/TextField';
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";

const TransparentTextboxMultiline:React.FC<{value:string, onChange:any, maxRows:number, permission?:string}> = observer(({value, onChange, maxRows, permission = undefined}) => {
    const {styleStore} = useStores();
    return (
      <TextField id="standard-basic" 
      variant="standard"
      focused
      fullWidth 
      onChange={onChange}
      value={value}
      maxRows={maxRows}
      rows={maxRows}
      multiline
      InputProps={{ disableUnderline: true }}
      sx={{input: {
          color: 'black',
        },
       
      }}
      />
                
    )
})
export default TransparentTextboxMultiline;