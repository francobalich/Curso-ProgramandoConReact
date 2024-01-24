import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {
  const userEmpty = {
    name: '',
    surname: '',
    email: '',
    state: 'not-authenticated'
  }

  const [user, setUser] = useState(userEmpty)
  
  return (
    <UserContext.Provider value={{ user, setUser, userEmpty }}>
      {children}
    </UserContext.Provider>
  )
}
