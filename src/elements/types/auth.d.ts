import { User } from 'firebase/auth'
import { DocumentData, DocumentReference } from 'firebase/firestore'

/**
 * To sign in with email and password.
 * @public
 */
export type TSignInWithEP = {
  email: string
  password: string
}

/**
 * The Expected return from the auth part of the context.
 * @public
 */
export interface IAuthReturnType {
  isLoggedIn: boolean
  authenticating: boolean
  logOut: () => void
  signInWithGoogle: () => void
  signInWithEP: ({ email, password }: TSignInWithEP) => void
  signUpWithEP: ({ email, password }: TSignInWithEP) => void
  user?: User
  userRef?: DocumentReference<DocumentData>
}

/**
 * The content added to the db from the google auth.
 * @public
 */
export interface IContent {
  email?: string | null
  displayName?: string | null
  phoneNumber?: string | null
  avatar?: string | null
}

export interface IPasswordConditions {
  isValid: boolean
  isLength: boolean
  isUpper: boolean
  isLower: boolean
  isNumber: boolean
}
