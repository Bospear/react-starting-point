import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EditLocationOutlinedIcon from "@mui/icons-material/EditLocationOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import NextWeekOutlinedIcon from "@mui/icons-material/NextWeekOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import SidebarSection from '../../SidebarElements/SidebarSection';
import AccordionSidebar from '../../SidebarElements/AccordionSidebar';
import AccordionSummarySidebar from '../../SidebarElements/AccordionSummarySidebar';
import ListItemSidebarButton from '../../SidebarElements/ListItemSidebarButton';
import ListItemSidebarSubButton from '../../SidebarElements/ListItemSibarSubButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import D20 from '../../../Components/Icons/D20';
import DND from '../../Icons/DND';
import { Authenticator } from '../../../Helpers/Routes/Authenticator';
import { observer } from "mobx-react-lite"
import { useStores } from "../../../Helpers/MobX/hooks";


const drawerWidthOpen = "100%";

const Mobile = observer(() => {
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
                
                <ListItemSidebarButton text={'Home'} icon={<HomeOutlinedIcon sx={{mr:3}}/>} redirectURL={'/'} />
                <ListItemSidebarButton text={'Foundry'} icon={<D20/>} redirectURL={'http://foundry.bospear.com/'} redirectOutside={true}/>
                {Authenticator.authenticate()?<ListItemSidebarButton text={'Character Sheet'} icon={<DND/>} onClickExtended = {() => {sidebarStore.setOpen(false)}} redirectURL={'/CharacterSheet'} redirectOutside={true}/>:''}
              </SidebarSection>
            </Box>
        </Drawer>
    );
})

export default Mobile;