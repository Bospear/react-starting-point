import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useStores } from "../../Helpers/MobX/hooks";

const LoaderMobile = () => {
    const {styleStore} = useStores();
  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', mt:"50%"}}>
      <CircularProgress sx={{svg:{color:styleStore.getButtonPrimaryColor()}}}/>
    </Box>
  );
}

export default LoaderMobile;