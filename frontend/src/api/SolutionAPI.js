// so now all of my requests need tokens, pass into function?
// logging out is deleting the token and navigating back to sign up page.
import { userToken } from '../helpers/helperFunctions';
import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8000/'

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

const fetchCommentsbySolution = (solutionID) => {
  const token = userToken()
  return axios.get(`${BASE_URL}solution_api/${solutionID}/comments`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.data)
    .catch(error => alert(error))
}

const createComment = (commentObj, solutionID) => {
  const token = userToken()
  fetch(`${BASE_URL}solution_api/${solutionID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(commentObj)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}

const putCommentbyId = (solutionID, commentID, updatedData) => {
  const token = userToken()
  fetch(`${BASE_URL}solution_api/${solutionID}/comments/${commentID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(updatedData)
  })
  .then(res => res.json())
  .then(data => console.log(data))
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
    localStorage.setItem('userID', String(data.user_id))
    localStorage.setItem('username', data.username)
  })
}

const getUserData = () => {
  const token = userToken()
  return axios.get(`${BASE_URL}accounts/get-user`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.data)
    .catch(error => console.log(error))
}

const getWikiArticle = (search) => {
  const token = userToken()
  return axios.post(`${BASE_URL}solution_api/third_party`, {"data": search}, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.data)
    .catch(err => alert(err))
}

export {
  BASE_URL,
  fetchAllSolutions,
  fetchSolutionbyId,
  fetchCommentsbySolution,
  createComment,
  putCommentbyId,
  createSolution,
  putSolutionbyId,
  deleteSolutionbyId,
  getWikiArticle,
  getUserData,
  loginWithToken,
};