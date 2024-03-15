import {Typography} from "@mui/material"
import { useStores } from "../../Helpers/MobX/hooks"
import { observer } from "mobx-react-lite";


const BasicText = observer((props:any) => {
    const {styleStore} = useStores();
    return (
 
    <Typography
    sx={{color:styleStore.getForegroundPrimaryColor()}}
    >{props.text}</Typography>
      )
})

export default BasicText;