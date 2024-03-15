import Button from "@mui/material/Button";
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";

const PrimaryIconButton:React.FC<{children:any, onClick:any, permission?:string}> =  observer(({children, onClick}) => {
  const {styleStore} = useStores();
    return(
            <Button
              fullWidth
              variant="contained"
              onClick={onClick}
              sx={{ backgroundColor:styleStore.getButtonSecondaryColor(), color:styleStore.getForegroundSecondaryColor(), 
              '&:hover': {
                backgroundColor: styleStore.getButtonPrimaryColor(),
                color:styleStore.getForegroundSecondaryColor(),
            }, }}
              
            >
            <>
              {children}
              </>
            </Button>
    )
})
export default PrimaryIconButton;