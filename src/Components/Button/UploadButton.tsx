import Button from "@mui/material/Button";
import { useStores } from "../../Helpers/MobX/hooks";


const UplaodButton = (params:any) => {
  const {styleStore} = useStores();

  function onReaderLoad(event:any){
    console.log('props obj:', params);
    params.uploadCharacter(event);
}



    return(
            <Button
              fullWidth
              variant="contained"
              component="label"
              sx={{ backgroundColor:styleStore.getButtonPrimaryColor(), color:"white", fontSize:params.fontSize,
              '&:hover': {
                backgroundColor: styleStore.getButtonPrimaryColor(),
                color:"white",
            }, }}
            >
                {params.text}
               <input
                    type="file"
                    hidden
                    onChange={(e) => {
                        if(e?.target?.files)
                        {
                        var reader = new FileReader();
                        reader.onload = onReaderLoad;
                        reader.readAsText(e.target.files[0]);
                    }}}
                />
            </Button>
    )
}
export default UplaodButton;