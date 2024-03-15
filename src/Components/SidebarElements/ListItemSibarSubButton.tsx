import ListItemButton from '@mui/material/ListItemButton';

import { useNavigate } from "react-router-dom";
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"

const ListItemSidebarSubButton = observer((params:any) => {
    const navigate = useNavigate();
    const { userStore } = useStores();
    const { styleStore } = useStores();
    return(
        <>
            {
                (params.permission !== '' && params.permission !== undefined)?
                (userStore.getPermissionByName(params.permission)?(
                    <ListItemButton sx={{color:styleStore.getForegroundPrimaryColor()}} onClick={() => {navigate(params.redirectURL)}}>
                        {params.icon}
                        {params.text}
                    </ListItemButton>
                ):("")):(
                    <ListItemButton sx={{color:styleStore.getForegroundPrimaryColor()}} onClick={() => {navigate(params.redirectURL)}}>
                        {params.icon}
                        {params.text}
                    </ListItemButton>
                )
            }
        </>
    )
})
export default ListItemSidebarSubButton;