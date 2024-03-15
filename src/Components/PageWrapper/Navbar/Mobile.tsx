import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import AvatarWrapper from "../../Avatar/AvatarWrapper";
import { Authenticator } from "../../../Helpers/Routes/Authenticator";
import PrimaryButton from "../../Button/PrimaryButton";
import {useNavigate} from "react-router-dom";
import { useStores } from "../../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"

const Mobile = observer(() => {
    const { sidebarStore } = useStores();
    const {styleStore} = useStores();
    const navigate = useNavigate();
    return(
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed"
      style={{
        boxShadow: "none",
        borderBottom: "1px solid lightgray",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor:styleStore.getBackgroundPrimaryColor(),
      }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, flexGrow:1 }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems:"center", width:"100vw" }}>
          <IconButton
            
            onClick={()=>{sidebarStore.toggle()}}
          >
            <MenuIcon sx={{ mr: 8, color:styleStore.getForegroundPrimaryColor() }}/>
          </IconButton>
          <Box sx={{width:"100%",  alignItems:"center", justifyContent:"center", display:"flex"}}>
          <Box sx={{width:"32px", mt:1, ml:-4}}>
            <Link to="/">
            <Box sx={{width: 30}}
            component="img"
            src={styleStore.getLogo()}
            ></Box>
            </Link>
          </Box>
          </Box>
          {Authenticator.authenticate()? <Box  sx={{ width:200, display:"flex", justifyContent:"flex-end"}}>
            <PrimaryButton text="Sign Out" onClick={() => navigate("/logout")} fontSize={11}/>
          </Box>: <Box  sx={{ width:160, display:"flex", justifyContent:"flex-end"}}>
            <PrimaryButton text="Sign In" onClick={() => navigate("/login")} fontSize={11}/>
          </Box>}
        </Box>
      </Toolbar>
    </AppBar>
    </Box>
    )
})
export default Mobile;