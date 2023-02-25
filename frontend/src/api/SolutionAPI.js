// so now all of my requests need tokens, pass into function?
// logging out is deleting the token and navigating back to sign up page.
import { userToken } from '../helpers/helperFunctions';
import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8000/';
const PRE_WIKI = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles='
const POST_WIKI = '&format=json&exsentences=2&explaintext=1&formatversion=2&origin=*'


// add a token?
const fetchAllSolutions = () => {
  const token = userToken()
  return fetch(`${BASE_URL}solution_api/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.json())
    .then(data => data.result)
}

const fetchSolutionbyId = (solutionID) => {
  const token = userToken()
  return fetch(`${BASE_URL}solution_api/${solutionID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.json())
    .then(data => data.result)
}

const createSolution = (solutionObj) => {
  const token = userToken()
  fetch(`${BASE_URL}solution_api/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(solutionObj)
  })
    .then(res => res.ok ? console.log('POST success') : console.log('POST no good'))
}

// put request on a wine object
const putSolutionbyId = (solutionID, updatedData) => {
  const token = userToken()
  fetch(`${BASE_URL}solution_api/${solutionID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(updatedData)
  })
    .then(res => res.ok ? console.log('put success') : console.log('put no good'))
}

const deleteSolutionbyId = (solutionID) => {
  const token = userToken()
  return axios.delete(`${BASE_URL}solution_api/${solutionID}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.data)
    .catch(error => alert(error))
}

// stores token in a cookie
const loginWithToken = (userData) => {
  fetch(`${BASE_URL}accounts/get-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(res => res.json())
  // token accessed at data.token, store in cookie
  .then(data => {
    document.cookie = `token=${data.token}; path=/;`
  })
}

const getUserData = () => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  return axios.get(`${BASE_URL}accounts/get-user`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.data)
    .catch(error => console.log(error))
}

const wikiArticle = (search) => {
  return axios.get(`${PRE_WIKI}${search}${POST_WIKI}`)
    .then( )
}

// consider doing it this way so you can easily set the state  
// useEffect(() => {
//   getUserData().then(data => setUserID(data.user_id))
// }, [])


export {
  BASE_URL,
  fetchAllSolutions,
  fetchSolutionbyId,
  createSolution,
  putSolutionbyId,
  deleteSolutionbyId,
  getUserData,
  loginWithToken,
};