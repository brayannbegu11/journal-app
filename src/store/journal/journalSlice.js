import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
    // active: {
    //     id: 'ABC123',
    //     title: '',
    //     body: '',
    //     date: 123456,
    //     imageUrls: [] //https://foto1.jpg, https://foto2.jpg
    // }
  },
  reducers: {
    
    savingNewNote: (state) => {
        state.isSaving = true
        state.messageSaved = ''
    },
    addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload)
        state.isSaving = false
    },
    setActiveNote: (state, action) => {
        state.activeNote = action.payload
        state.messageSaved = ''
    },
    setNotes: (state, action) => {
      state.notes = (action.payload)
    },
    setSaving: (state) => {
      state.isSaving = true
      //TODO : Mensaje de error
    },
    noteUpdated: (state, action) => { // payload: note
      state.isSaving = false
      state.notes = state.notes.map( note => {

        if(note.id === action.payload.id){
          return action.payload
        }
        return note
      } )
      //TODO: Mostrar mensaje de actualización
      state.messageSaved = `Nota actualizada correctamente`
    },
    deleteNoteById: (state, action) => {},
  },
})
// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  noteUpdated,
  deleteNoteById,
  savingNewNote
} = journalSlice.actions
