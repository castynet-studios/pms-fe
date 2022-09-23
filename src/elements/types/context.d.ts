export interface IAppContext {
  authenticating: boolean
  isLoggedIn: boolean
  logOut: () => void
  signInWithGoogle: () => void
  user: User
  userRef: DocumentReference<DocumentData>
  signInWithEP: ({ email, password }: TSignInWithEP) => void
  signUpWithEP: ({ email, password }: TSignInWithEP) => void
}
