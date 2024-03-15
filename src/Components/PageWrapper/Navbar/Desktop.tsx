import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import AvatarWrapper from "../../Avatar/AvatarWrapper";
import PrimaryButton from "../../Button/PrimaryButton";
import { Authenticator } from "../../../Helpers/Routes/Authenticator";
import { useStores } from "../../../Helpers/MobX/hooks";
import {useNavigate} from "react-router-dom";
import { observer } from "mobx-react-lite"

const Desktop = observer(() => {
    const { sidebarStore } = useStores();
    const {styleStore} = useStores();
    const navigate = useNavigate();
    return(
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed"
      style={{
        boxShadow: "none",
        borderBottom: `1px solid ${styleStore.getBoarderColor()}`,
        justifyContent: "space-between",
        backgroundColor:styleStore.getBackgroundPrimaryColor(),
        color:styleStore.getForegroundPrimaryColor()
      }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, flexGrow:1 }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems:"center", width:"100vw" }}>
          <IconButton disableRipple
            onClick={()=>{sidebarStore.toggle()}}
          >
            <MenuIcon sx={{ mr: 2, color:styleStore.getForegroundPrimaryColor() }}/>
          </IconButton>
          <Box sx={{width:"100%",  alignItems:"center", justifyContent:"center", display:"flex"}}>
          <Box sx={{width:"32px", mt:1}}>
            <Link to="/">
            <Box sx={{width: "100%"}}
            component="img"
            src={styleStore.getLogo()}
            ></Box>
            </Link>
          </Box>
          
          </Box>
          {Authenticator.authenticate()? <Box  sx={{ width:120, display:"flex", justifyContent:"flex-end"}}>
            <PrimaryButton text="Sign Out" onClick={() => navigate("/logout")}/>
          </Box>: <Box  sx={{ width:100, display:"flex", justifyContent:"flex-end"}}>
            <PrimaryButton text="Sign In" onClick={() => navigate("/login")}/>
          </Box>}
          
        </Box>
         <Box sx={{alignItems:"center", justifyContent:"right",display:"flex"}}>
          <AvatarWrapper/>
        </Box>
      </Toolbar>
    </AppBar>
    </Box>
    )
})

export default Desktop;