import {Typography} from "@mui/material"
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"

const Subtitle = observer((props:any) => {
    const {styleStore} = useStores();
    return (
        <>
    <Typography
    sx={{color:styleStore.getButtonPrimaryColor(), fontWeight: 'bold'}}
    >{props.text}</Typography>
      </>
      )
})

export default Subtitle;