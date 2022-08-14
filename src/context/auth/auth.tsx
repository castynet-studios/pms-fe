import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DocumentData, DocumentReference } from 'firebase/firestore'
import { User } from 'firebase/auth'

import { AuthReturnType, Content } from 'elements/types'
import { fba } from 'context/firebase'

export const Auth = (): AuthReturnType => {
  const { getDoc, doc, db, onAuthStateChanged, auth, setDoc } = fba

  const [rawUser, setRawUser] = useState<User>()
  const [user, setUser] = useState<User>()
  const [token, setToken] = useState<string>()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authenticating, setAuthenticating] = useState(false)
  const [userRef, setUserRef] = useState<DocumentReference<DocumentData>>()
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async (uid: string) => {
      const docSnap = await getDoc(doc(db, 'users', uid))
      const usr = docSnap.data()
      setUser(usr as User)
    }

    onAuthStateChanged(auth, user => {
      if (user) {
        setToken(user.uid)
        setUserRef(doc(db, 'users', user.uid))
        setRawUser(user)
        getUser(user.uid)
      }
    })
  }, [])

  // get the user data, if user is none existent, create one
  async function fetchUser(paramUser?: User) {
    const docSnap = await getDoc(doc(db, 'users', paramUser?.uid || ''))

    if (!docSnap.exists()) {
      const content: Content = {
        displayName: paramUser?.displayName,
        phoneNumber: paramUser?.phoneNumber,
        avatar: paramUser?.photoURL,
      }
      AddUserToDb(content, doc(db, 'users', paramUser?.uid || ''))
    } else {
      const usr = docSnap.data()
      setUser(usr as User)

      const Snap = await getDoc(doc(db, 'roles', paramUser?.uid || ''))
      Snap.exists() ? navigate('/admin') : navigate('/')
    }
  }
  // send user info to db
  // tslint:disable-next-line: no-shadowed-variable
  function AddUserToDb(content: Content, userRef: DocumentReference<Content>) {
    setDoc(userRef, content, { merge: true })
    // raw user comes from state, so we can use it to fetch user data
    fetchUser(rawUser)
  }

  // sign the user in then send them to complete acc page or courses
  async function signIn() {
    fba.setPersistence(auth, fba.browserSessionPersistence)
    const result = await fba.signInWithPopup(auth, fba.provider)
    setToken(result.user.uid)
    setUserRef(doc(db, 'users', result.user.uid))
    setRawUser(result.user)
    fetchUser(result.user)
  }

  // logout and reload to lose state
  async function logOut() {
    fba.signOut(auth)
    window.location.reload()
  }

  return {
    isLoggedIn,
    setIsLoggedIn,
    authenticating,
    logOut,
    signIn,
    user,
    userRef,
  }
}
