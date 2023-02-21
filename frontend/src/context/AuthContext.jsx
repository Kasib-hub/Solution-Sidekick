import { createContext, useState, useEffect } from "react";
import { BASE_URL, TOKEN } from "../api/SolutionAPI";
const AuthContext = createContext()

export default AuthContext




// also export the providers and their properites. The values passed through provider are available all throughout the application, this means that info about authentication and the user is available all through out the application.





export const AuthProvider = ({children}) => {
  const [userId, setUserId] = useState(null)
  const [userName, setUserName] = useState('')


  useEffect(() => {

  }, [])

  let contextData = {
    'userId': userId,
    userName: userName
}

  return (
    <AuthContext.Provider value={{contextData}}>
      {children}
    </AuthContext.Provider>
  )
}