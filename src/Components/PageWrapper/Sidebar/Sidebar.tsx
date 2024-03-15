
import Desktop from "./Desktop"
import Mobile from "./Mobile"
import Landscape from "./Landscape"
import Box from '@mui/material/Box';
import GetScreenType from '../../../Helpers/ScreenHelper'

type MyComponentProps = React.PropsWithChildren<{}>;
const Sidebar = ({ children }: MyComponentProps) => {
    const isDesktop = (GetScreenType().isDesktop);
    const isLaptop = (GetScreenType().isLaptop);
    const isDesktopOrLaptop = isDesktop || isLaptop;
    //let open = sidebarStore.open;
    return(
        <>
       
        {isDesktopOrLaptop?(<Desktop/>):(<Mobile/>)}
        {children}
        </>
    );
}

export default Sidebar;