export interface AppContext {
  authenticating: boolean
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
  logOut: () => void
  signIn: () => void
  user: User
  userRef: DocumentReference<DocumentData>
}
