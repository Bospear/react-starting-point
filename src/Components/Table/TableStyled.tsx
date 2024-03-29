import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";



function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const TableStyled:React.FC<{children:any, permission?:string}> =  observer(({children, permission = undefined}) => {
    const {styleStore} = useStores();
    return(
        <TableContainer>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        {children}
      </Table>
    </TableContainer>
    )
})

export default TableStyled