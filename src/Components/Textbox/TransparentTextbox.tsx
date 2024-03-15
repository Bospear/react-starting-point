import TextField from '@mui/material/TextField';
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";

const TransparentTextbox:React.FC<{value:string, onChange:any, onClick?:any, fontSize?:number, permission?:string}> = observer(({value, onChange, onClick, fontSize= 14, permission = undefined}) => {
    const {styleStore} = useStores();
    return (
      <TextField id="standard-basic" 
      variant="standard"
      focused
      fullWidth 
      onChange={onChange}
      value={value}
      onClick={onClick}
      InputProps={{ disableUnderline: true }}
      sx={{input: {
          color: 'black',
          fontSize:{fontSize}
        },
       
      }}
      />
                
    )
})
export default TransparentTextbox;