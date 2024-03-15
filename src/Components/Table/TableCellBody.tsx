import TableCell from '@mui/material/TableCell';

import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";

const TableCellBody:React.FC<{children:any, align?:any, permission?:string}> = observer(({children, align = undefined, permission = undefined}) => {
    const {styleStore} = useStores();
    return(
        <TableCell sx={{color:styleStore.getForegroundPrimaryColor(), borderColor:styleStore.getBoarderColor()}} align={align?(align):(undefined)}>{children}</TableCell>
    )
})
export default TableCellBody;