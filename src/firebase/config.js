// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEs8hDWgHXrBnxLEpAsKH-AeJvHBwYjsg',
  authDomain: 'journal-app-ed16c.firebaseapp.com',
  projectId: 'journal-app-ed16c',
  storageBucket: 'journal-app-ed16c.appspot.com',
  messagingSenderId: '233841709425',
  appId: '1:233841709425:web:b1d1f9af643d5147c7a6d0',
}

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB   = getFirestore(FirebaseApp)
