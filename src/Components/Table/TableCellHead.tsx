import TableCell from '@mui/material/TableCell';

import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";

const TableCellHead:React.FC<{text:string, align?:any, permission?:string}> = observer(({text, align = undefined, permission = undefined}) => {
    const {styleStore} = useStores();
    return(
        <TableCell sx={{color:styleStore.getForegroundPrimaryColor(), fontSize:24, borderColor:styleStore.getBoarderColor()}} align={align?(align):(undefined)}>{text}</TableCell>
    )
})
export default TableCellHead;