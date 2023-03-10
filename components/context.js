import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function openSidebar() {
    setIsSidebarOpen(true)
    console.log('Open clicked')
  }
  function closeSidebar() {
    setIsSidebarOpen(false)
    console.log('Close clicked')
  }

  return (
    <AppContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
