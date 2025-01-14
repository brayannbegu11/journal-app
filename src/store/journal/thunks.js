import { async } from '@firebase/util'
import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { loadNotes } from '../../helpers'
import {
  addNewEmptyNote,
  noteUpdated,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
} from './journalSlice'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    //! dispatch
    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    if (!uid) throw new Error('El id no existe')
    console.log({ uid })
    const notes = await loadNotes(uid)

    dispatch(setNotes(notes))
  }
}

export const startSavingNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving())
    const { uid } = getState().auth
    const { activeNote: note } = getState().journal

    const noteToFireStore = { ...note }
    delete noteToFireStore.id

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await setDoc(docRef, noteToFireStore, {merge: true})
    dispatch(noteUpdated(note))
}
}
