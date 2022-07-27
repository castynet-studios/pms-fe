import React, { useContext } from 'react'

const Context = React.createContext()

export const useAccounting = () => useContext(Context)

export const AccountingProvider = props => {
  const testVal = 100
  return <Context.Provider value={{ testVal }} {...props} />
}
