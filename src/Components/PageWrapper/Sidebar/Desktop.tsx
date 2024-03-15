import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import SidebarSection from '../../SidebarElements/SidebarSection';
import ListItemSidebarButton from '../../SidebarElements/ListItemSidebarButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { observer } from "mobx-react-lite"
import { useStores } from "../../../Helpers/MobX/hooks";


const drawerWidthOpen = 290;

const Desktop = observer(() => {
    const { sidebarStore } = useStores();
    const { styleStore } = useStores();
    return(
      
        <Drawer
          variant="persistent"
          anchor="left"
          open={sidebarStore.open}
          PaperProps={{
            sx: {
              backgroundColor: styleStore.getBackgroundPrimaryColor()
            }
          }}
          sx={{
              width: drawerWidthOpen,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidthOpen,
                boxSizing: 'border-box',
                borderColor:styleStore.getBoarderColor()
              },
            }}
        >
            <Box sx={{mt:7}}>
              <SidebarSection title={''}>
                <ListItemSidebarButton text={'Home'} onClickExtended={()=>{}} icon={<HomeOutlinedIcon sx={{mr:3}}/>} redirectURL={'/'} />
              </SidebarSection>         
            </Box>
        </Drawer>
    );
})

export default Desktop;