import * as React from "react";

import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import LogoutIcon from "@mui/icons-material/Logout";
import { SetStyle } from "../../Helpers/CookieHelper";
import { ListItemIcon, MenuItem } from "@mui/material";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useStores } from "../../Helpers/MobX/hooks";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite"
import MenuIcon from '@mui/icons-material/Menu';

const AvatarWrapper = observer(() => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate()
  const { styleStore } = useStores();
  styleStore.rehydrate();
  let is_dark = !styleStore.getLightMode();
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    navigate('/logout');
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings" arrow>
          <IconButton
            onClick={(event) => setAnchorEl(event.currentTarget)}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: `drop-shadow(0px 2px 8px ${styleStore.getBoarderColor()})`,
            mt: 1.5,
            backgroundColor: styleStore.getBackgroundPrimaryColor(),
            color:styleStore.getForegroundPrimaryColor(),
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 20,
              width: 10,
              height: 10,
              bgcolor: styleStore.getBackgroundPrimaryColor(),
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
        <FormControlLabel control={<Switch key={`switch-${is_dark}`} checked={is_dark} onClick={() => {styleStore.toggleLightMode(); SetStyle(styleStore.light_mode);}} />} label="DarkMode" />
        </MenuItem>

        <Divider sx={{borderColor:styleStore.getBoarderColor()}}/>
        <MenuItem onClick={() => {handleClose(); logout();}}>
          <ListItemIcon>
            <LogoutIcon sx={{color:styleStore.getForegroundPrimaryColor()}}/>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
})

export default AvatarWrapper;
