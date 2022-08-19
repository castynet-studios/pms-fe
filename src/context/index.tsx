import React, { createContext, FC, useContext } from 'react'

import { AppContext } from 'elements/types'
import { Auth } from './auth/auth'

const Context = createContext<AppContext>({} as AppContext)

export const useApp = () => useContext(Context)

interface Props {
  children: JSX.Element[] | JSX.Element
}

const StateProvider: FC<Props> = ({ children }) => {
  const {
    isLoggedIn,

    authenticating,
    logOut,
    signIn,
    user,
    userRef,
  } = Auth()

  return (
    <Context.Provider
      value={{
        isLoggedIn,

        authenticating,
        logOut,
        signIn,
        user,
        userRef,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default StateProvider
