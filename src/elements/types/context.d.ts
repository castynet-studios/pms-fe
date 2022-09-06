export interface IAppContext {
  authenticating: boolean
  isLoggedIn: boolean
  logOut: () => void
  signInWithGoogle: () => void
  user: User
  userRef: DocumentReference<DocumentData>
}
