import { Dispatch, SetStateAction } from 'react'
import { User } from 'firebase/auth'
import { DocumentData, DocumentReference } from 'firebase/firestore'

/**
 * The Expected return from the auth part of the context.
 * @public
 */
export interface AuthReturnType {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
  authenticating: boolean
  logOut: () => void
  signIn: () => void
  user?: User
  userRef?: DocumentReference<DocumentData>
}

/**
 * The content added to the db from the google auth.
 * @public
 */
export interface Content {
  displayName?: string | null
  phoneNumber?: string | null
  avatar?: string | null
}
