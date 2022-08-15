export interface AppContext {
  authenticating: boolean
  isLoggedIn: boolean
  logOut: () => void
  signIn: () => void
  user: User
  userRef: DocumentReference<DocumentData>
}
