import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"
const AccordionSummarySidebar :React.FC<{children:any}> = observer(({children}) => {
    const {styleStore} = useStores();
    return(
        <>
            {
                
                   
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:styleStore.getForegroundPrimaryColor()}}/>} aria-controls="panel1a-content" id="panel1a-header">
                    {children}
                </AccordionSummary>
                
            }
        </>
    )
})
export default AccordionSummarySidebar;