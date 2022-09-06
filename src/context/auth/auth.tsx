import { useState, useEffect } from 'react'

import { DocumentData, DocumentReference } from 'firebase/firestore'
import { User } from 'firebase/auth'

import {
  IAuthReturnType,
  IContent,
  useCurrentPath,
  TSignInWithEP,
} from 'elements'
import { fba } from 'context/firebase'
import { Paths } from 'routes'

export const Auth = (): IAuthReturnType => {
  const { getDoc, doc, db, onAuthStateChanged, auth, setDoc } = fba

  const [rawUser, setRawUser] = useState<User>()
  const [user, setUser] = useState<User>()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authenticating, setAuthenticating] = useState(false)
  const [userRef, setUserRef] = useState<DocumentReference<DocumentData>>()
  const currentPath = useCurrentPath()
  const isAuthPath = [
    Paths.Login,
    Paths.Register,
    Paths.ForgotPassword,
  ].includes(currentPath)

  useEffect(() => {
    const getUser = async (uid: string) => {
      const docSnap = await getDoc(doc(db, 'users', uid))
      const usr = docSnap.data()
      setUser(usr as User)
    }

    onAuthStateChanged(auth, user => {
      if (user) {
        setUserRef(doc(db, 'users', user.uid))
        setRawUser(user)
        getUser(user.uid)
        setIsLoggedIn(true)
      }
    })
  }, [auth, db, doc, getDoc, isAuthPath, onAuthStateChanged])

  // get the user data, if user is none existent, create one
  async function fetchUser(paramUser?: User) {
    const docSnap = await getDoc(doc(db, 'users', paramUser?.uid || ''))

    if (!docSnap.exists()) {
      const content: IContent = {
        displayName: paramUser?.displayName,
        phoneNumber: paramUser?.phoneNumber,
        avatar: paramUser?.photoURL,
      }
      AddUserToDb(content, doc(db, 'users', paramUser?.uid || ''))
    } else {
      const usr = docSnap.data()
      setUser(usr as User)

      // const Snap = await getDoc(doc(db, 'roles', paramUser?.uid || ''))

      setAuthenticating(false)
      setIsLoggedIn(true)
    }
  }

  // send user info to db
  function AddUserToDb(
    content: IContent,
    userRef: DocumentReference<IContent>
  ) {
    setDoc(userRef, content, { merge: true })
    // raw user comes from state, so we can use it to fetch user data
    fetchUser(rawUser)
  }

  // sign using google the user in then send them to complete sign up
  async function signInWithGoogle() {
    setAuthenticating(true)
    fba.setPersistence(auth, fba.browserSessionPersistence)
    const result = await fba.signInWithPopup(auth, fba.provider)
    setUserRef(doc(db, 'users', result.user.uid))
    setRawUser(result.user)
    fetchUser(result.user)
  }

  // sign using password & email the user in then send them to complete sign up
  async function signInWithEP({ email, password }: TSignInWithEP) {
    setAuthenticating(true)
    fba.setPersistence(auth, fba.browserSessionPersistence)
    const result = await fba.signInWithEmailAndPassword(auth, email, password)
    setUserRef(doc(db, 'users', result.user.uid))
    setRawUser(result.user)
    fetchUser(result.user)
  }

  async function signUpWithEP({ email, password }: TSignInWithEP) {
    setAuthenticating(true)
    fba.setPersistence(auth, fba.browserSessionPersistence)
    const result = await fba.createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
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
    authenticating,
    logOut,
    signInWithGoogle,
    user,
    userRef,
    signInWithEP,
    signUpWithEP,
  }
}
