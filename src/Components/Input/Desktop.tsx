import { Input } from '@mui/material';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
    Button,
    Stack,
  } from "@mui/material";
const Desktop = (params:any) => {
    return(
        <Stack>
            <label htmlFor="document-button-file">
            <Input
                id="document-button-file"
                type="file"
                name="document-button-file"
                value={params.value}
                onChange={(e) => {params.onChange(e.target.value)}}
                sx={{display: "none"}}
            />
            <Button
                color="primary"
                variant="contained"
                component="span"
                startIcon={<AddCircleOutlineIcon />}
                fullWidth
            >
                Add document
            </Button>
            </label>
        </Stack>
    )
}
export default Desktop