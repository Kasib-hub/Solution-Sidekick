import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const BASE_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  // if local storage has a token, set the state to that token, otherwise set it to null
  const [authTokens, setAuthTokens] = useState( () => {
      return localStorage.getItem('authTokens') 
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
    }
  )

  const [user, setUser] = useState( () => {
      return localStorage.getItem('authTokens') 
      ? jwt_decode(localStorage.getItem('authTokens'))
      : null
    }
  )

  const loginUser = async (e) => {
    e.preventDefault();
    const userObject = {
      "username": e.target.username.value,
      "password": e.target.password.value
    }
    const response = await fetch(`http://${BASE_URL}/solution_api/accounts/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
    })
    const body = await response.json();
    if (!response.ok) {
      setError(body)
      
    } else {
      setError(null)
      setAuthTokens(body)
      setUser(jwt_decode(body.access))
      localStorage.setItem('authTokens', JSON.stringify(body))
      navigate('/solution_list');
    }
  }

    // use useCallback to memoize the function so that it doesn't get recreated on every render
  // memoizing means that the function will only be recreated if the dependencies change
  const logoutUser = useCallback(() => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    navigate('/login');
  })

  const updateToken = useCallback(async () => {
    const response = await fetch(`http://${BASE_URL}/solution_api/accounts/token/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({refresh: authTokens.refresh}),
    })
    const body = await response.json();
    if (!response.ok) {
      setError(body)
      logoutUser()
    } else {
      setError(null)
      setAuthTokens(body)
      setUser(jwt_decode(body.access))
      localStorage.setItem('authTokens', JSON.stringify(body))
    }
  }, [authTokens, logoutUser])



  // update the token every 10 minutes by calling the refresh endpoint
  useEffect(() => {
    const tokenInterval = setInterval(() => {
      if(authTokens) {
        updateToken();
      }
    }, 60000);
    return () => clearInterval(tokenInterval);
  }, [authTokens, updateToken]);

  let contextData = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    authTokens: authTokens,
    error: error,
    user: user,
    setError: setError
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}