import {Typography} from "@mui/material"
import { Box } from "@mui/system";
import { useStores } from "../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"

const Title = observer((params:any) => {
    const {styleStore} = useStores();
    return(
        <Box sx={{mt:5, mb:5}}>
        <Typography sx={{ color: styleStore.getForegroundPrimaryColor(), fontSize:30}}>{params.text}</Typography>
        </Box>
    )
})

export default Title;