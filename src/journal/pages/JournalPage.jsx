import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'
import JournalLayout from '../layout/JournalLayout'
import NoteView from '../views/NoteView'
import NothingSelectedView from '../views/NothingSelectedView'

function JournalPage() {
  const { isSaving, activeNote } = useSelector((state) => state.journal)
  const dispatch = useDispatch()
  const onCLickNewNote = () => {
    dispatch(startNewNote())
  }

  const saving = useMemo(() => isSaving === true, [isSaving])
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        autem quam nostrum, doloremque accusamus numquam, fugit ratione vero
        dicta ipsam nobis saepe sequi, distinctio quis tempore cumque excepturi
        aut ab!
      </Typography> */}
      {activeNote === null ? <NothingSelectedView /> : <NoteView />}
      

      
      <IconButton
        size="large"
        disabled={saving}
        onClick={onCLickNewNote}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 20,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}

export default JournalPage
