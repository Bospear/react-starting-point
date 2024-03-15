import Button from "@mui/material/Button";
import { useStores } from "../../Helpers/MobX/hooks";

const PrimaryButton = (params:any) => {
  const {styleStore} = useStores();
    return(
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor:styleStore.getButtonPrimaryColor(), color:"white", fontSize:params.fontSize,
              '&:hover': {
                backgroundColor: styleStore.getButtonPrimaryColor(),
                color:"white",
            }, }}
              onClick={params.onClick}
            >
              {params.text}
            </Button>
    )
}
export default PrimaryButton;