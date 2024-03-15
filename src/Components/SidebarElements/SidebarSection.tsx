import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"


const SidebarSection:React.FC<{children:any, title:string, permission?:string}> = observer(({children, title, permission = undefined}) => {
    const { userStore } = useStores();
    const { styleStore } = useStores();
    return(
        <Box>
            {
                (permission !== '' && permission !== undefined)?
                (userStore.getPermissionByName(permission)?(
                    <div>
                        <Typography sx={{ color: styleStore.getLabel(), fontSize: 17, mb: 1, mt: 3, fontWeight: "bold" }}>{title}</Typography>
                        {children}
                    </div>
                ):("")):(
                    <>
                        <Typography sx={{ color: styleStore.getLabel(), fontSize: 17, mb: 2, mt: 4, fontWeight: "bold" }}>{title}</Typography>
                        {children}
                    </>
                )
            }
        </Box>
    )
})
export default SidebarSection;