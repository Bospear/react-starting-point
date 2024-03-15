import Desktop from "./Desktop"
import Mobile from "./Mobile"
import Landscape from "./Landscape"
import GetScreenType from '../../Helpers/ScreenHelper'
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"


const Home = observer(() => {

    const isDesktop = GetScreenType().isDesktop;
    const isLaptop = GetScreenType().isLaptop;
    let isDesktopOrLaptop = isDesktop || isLaptop;
    const isPortrait = GetScreenType().isPortrait;
    const { styleStore } = useStores();
    
      
    document.body.style.backgroundColor = styleStore.getBackgroundPrimaryColor();
    document.body.style.color = styleStore.getForegroundPrimaryColor();
    return(
            isDesktopOrLaptop?(<Desktop/>):(isPortrait?(<Mobile />):(<Landscape/>))
    )
})

export default Home;