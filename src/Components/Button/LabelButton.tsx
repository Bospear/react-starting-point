import Button from "@mui/material/Button";
import { useStores } from "../../Helpers/MobX/hooks";
import { observer } from "mobx-react-lite";

const LabelButton:React.FC<{children:any, onClick:any, permission?:string}> =  observer(({children, onClick}) => {
  const {styleStore} = useStores();
    return(
            <Button
              fullWidth
              variant="text"
              onClick={onClick}
              sx={{ backgroundColor:styleStore.getBackgroundPrimaryColor(), color:styleStore.getButtonSecondaryColor(), fontSize:15, fontWeight:'bold',
              '&:hover': {
                backgroundColor: styleStore.getBackgroundPrimaryColor(),
                color:styleStore.getButtonSecondaryColor(),
            }, }}
              
            >
            <>
              {children}
              </>
            </Button>
    )
})
export default LabelButton;