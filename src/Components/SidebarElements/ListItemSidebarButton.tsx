import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';

import { useNavigate } from "react-router-dom";
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite"

const ListItemSidebarButton = observer((params:any, redirectOutside:boolean = false) => {
    const navigate = useNavigate();
    const { userStore } = useStores();
    const { styleStore } = useStores();
    return(
        <>
            {
                (params.permission !== '' && params.permission !== undefined)?
                (userStore.getPermissionByName(params.permission)?(
                    <ListItemButton sx={{color:styleStore.getForegroundPrimaryColor()}} onClick={() => {params.onClickExtended(); redirectOutside?(window.location.replace(params.redirectURL)):(navigate(params.redirectURL))}}>
                        {params.icon}
                        <Typography>{params.text}</Typography>
                    </ListItemButton>
                ):("")):(
                    <ListItemButton sx={{color:styleStore.getForegroundPrimaryColor()}} onClick={() => {params.onClickExtended(); redirectOutside?(window.location.replace(params.redirectURL)):(navigate(params.redirectURL))}}>
                        {params.icon}
                        <Typography>{params.text}</Typography>
                    </ListItemButton>
                )
            }
        </>
    )
})
export default ListItemSidebarButton;