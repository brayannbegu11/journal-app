import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import JournalLayout from '../layout/JournalLayout'
import NoteView from '../views/NoteView'
import NothingSelectedView from '../views/NothingSelectedView'

function JournalPage() {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        autem quam nostrum, doloremque accusamus numquam, fugit ratione vero
        dicta ipsam nobis saepe sequi, distinctio quis tempore cumque excepturi
        aut ab!
      </Typography> */}
      <NothingSelectedView />

      {/* <NoteView /> */}
      <IconButton size='large' sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity: 0.9},
        position: 'fixed',
        right: 20,
        bottom: 50
      }}>
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}

export default JournalPage
