import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';

import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";

const DownloadButton:React.FC<{onClick:any, permission?:string}> = observer(({onClick, permission=undefined}) => {
    const {styleStore} = useStores();
    return(
        <Button variant="text" sx={{color:styleStore.getForegroundPrimaryColor()}} onClick={onClick}>
            <FileDownloadIcon/>
        </Button>
    )
})

export default DownloadButton;