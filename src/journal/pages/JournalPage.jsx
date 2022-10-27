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
      {/* <NothingSelectedView /> */}

      <NoteView />
    </JournalLayout>
  )
}

export default JournalPage
