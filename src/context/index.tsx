import React, { createContext, FC, useContext } from 'react'

import { IAppContext } from 'elements'
import { Auth } from './auth/auth'

const Context = createContext<IAppContext>({} as IAppContext)

export const useApp = () => useContext(Context)

interface Props {
  children: JSX.Element[] | JSX.Element
}

const StateProvider: FC<Props> = ({ children }) => {
  const {
    isLoggedIn,
    authenticating,
    logOut,
    signInWithGoogle,
    user,
    userRef,
  } = Auth()

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        authenticating,
        logOut,
        signInWithGoogle,
        user,
        userRef,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default StateProvider
