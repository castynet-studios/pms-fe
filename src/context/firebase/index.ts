import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  getDocs,
  collection,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBiVzYoZqS1TmzEcNhxkjra5Q7N7PC5U0w',
  authDomain: 'piggery-ms.firebaseapp.com',
  projectId: 'piggery-ms',
  storageBucket: 'piggery-ms.appspot.com',
  messagingSenderId: '764295990019',
  appId: '1:764295990019:web:d86c83bc98f825111b3736',
  measurementId: 'G-5PBV94Z3J2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const analytics = getAnalytics(app)
const provider = new GoogleAuthProvider()
const db = getFirestore()

export const fba = {
  getDoc,
  setDoc,
  analytics,
  setPersistence,
  signInWithPopup,
  browserSessionPersistence,
  onAuthStateChanged,
  signOut,
  db,
  getDocs,
  collection,
  doc,
  auth,
  provider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
}
