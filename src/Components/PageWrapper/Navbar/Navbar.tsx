import Desktop from "./Desktop"
import Mobile from "./Mobile"
import GetScreenType from '../../../Helpers/ScreenHelper'
import { observer } from "mobx-react-lite"

const Navbar = observer(() => {
  const isDesktop = (GetScreenType().isDesktop);
    const isLaptop = (GetScreenType().isLaptop);
    const isDesktopOrLaptop = isDesktop || isLaptop;
    //let open = sidebarStore.open;
    return(
        <>
        {isDesktopOrLaptop?(<Desktop/>):(<Mobile/>)}
        </>
    );
})
export default Navbar;