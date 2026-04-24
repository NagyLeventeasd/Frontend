import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export function Ellenorzes({ children }) {
  const [user, setUser] = useState(null)
  const [userError, setUserError] = useState(null)

  useEffect(() => {
    async function load() {
      const data = await whoami()
      if (!data.error) {
        setUser(data)
      } else {
        setUserError(data.error)
      }
    }
    load()
  }, [])

  async function onLogout() {
    const data = await logout()

    if (data.error) {
      return setUserError(data.error)
    }

    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, userError, onLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

// custom hook (kényelmesebb használat)
export function useAuth() {
  return useContext(AuthContext)
}