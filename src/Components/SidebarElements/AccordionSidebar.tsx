import Accordion from '@mui/material/Accordion';
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";

const AccordionSidebar :React.FC<{children:any, permission?:string}> = observer(({children, permission = undefined}) => {
    const { userStore } = useStores();
    const { styleStore } = useStores();
    return(
        <>
            {
                (permission !== '' && permission !== undefined)?
                (userStore.getPermissionByName(permission)?(
                    <Accordion
                    style={{ boxShadow: "none" }}
                    disableGutters
                    elevation={0}
                    sx={{ backgroundColor:styleStore.getBackgroundPrimaryColor(),
                        color:styleStore.getForegroundPrimaryColor(),
                        "&.MuiAccordion-root:before": {
                        backgroundColor: styleStore.getBackgroundPrimaryColor(),
                        },
                    }}
                    >
                    {children}
                    </Accordion>
                ):("")):(
                    <Accordion
                    style={{ boxShadow: "none" }}
                    disableGutters
                    elevation={0}
                    sx={{ backgroundColor:styleStore.getBackgroundPrimaryColor(),
                        color:styleStore.getForegroundPrimaryColor(),
                        "&.MuiAccordion-root:before": {
                        backgroundColor: styleStore.getBackgroundPrimaryColor(),
                        },
                    }}
                    >
                    {children}
                    </Accordion>
                )
            }
        </>
    )
})
export default AccordionSidebar;