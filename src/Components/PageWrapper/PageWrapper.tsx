import * as React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Box from '@mui/material/Box';
import { observer } from "mobx-react-lite"
import { useStores } from "../../Helpers/MobX/hooks";

 
type MyComponentProps = React.PropsWithChildren<{}>;
const PageWrapper = observer(({ children }: MyComponentProps) => {
    const {styleStore} = useStores();
    
    document.body.style.backgroundColor = styleStore.getBackgroundPrimaryColor();
    document.body.style.color = styleStore.getForegroundPrimaryColor();

    return(
        <Box>
        <Navbar/>
        <Sidebar>
            <Box sx={{mt:"64px"}}>
            {children}
            </Box>
        </Sidebar>
        </Box>
    )
})
export default PageWrapper;