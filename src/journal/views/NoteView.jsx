import { Grid, Typography } from "@mui/material"

function NoteView() {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb: 1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'> 26 de octubre, 2022</Typography>
        </Grid>
    </Grid>
  )
}

export default NoteView