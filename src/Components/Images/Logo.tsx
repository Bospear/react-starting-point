import {Box} from "@mui/material"
import { useStores } from "../../Helpers/MobX/hooks";

const LineTextbox = (props:any) => {
    const {styleStore} = useStores();
    return (
        <>
    <Box
        component="img"
        alt="Bospear Logo"
        sx={{width:1}}
        src={styleStore.getLogo()}
      />
      </>
      )
}

export default LineTextbox;