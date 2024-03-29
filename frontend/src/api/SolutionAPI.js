
import { userToken } from '../helpers/helperFunctions';
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_API_URL

// add a token?
const fetchAllSolutions = () => {
  const token = userToken()
  return fetch(`http://${BASE_URL}/solution_api/`, {
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
  return fetch(`http://${BASE_URL}/solution_api/${solutionID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.json())
    .then(data => data.result)
}
// probably best to define the api call where it is used and not pass the token as an argument
const createSolution = async (token, solutionObj) => {
  const response = await fetch(`http://${BASE_URL}/solution_api/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(solutionObj)
  })
  const body = await response.json()
  if (!response.ok) {
    if (response.status === 400) {
      throw new Error(`Error: ${JSON.stringify(body)}`)
    } else {
      throw new Error(`${response.status} (${response.statusText})`)
    }
  }
  return body
}

const putSolutionbyId = (solutionID, updatedData) => {
  const token = userToken()
  return fetch(`http://${BASE_URL}/solution_api/${solutionID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(updatedData)
  })
}

const deleteSolutionbyId = (solutionID) => {
  const token = userToken()
  return axios.delete(`http://${BASE_URL}/solution_api/${solutionID}`, {
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
  return axios.get(`http://${BASE_URL}/solution_api/${solutionID}/comments`, {
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
  fetch(`http://${BASE_URL}/solution_api/${solutionID}/comments`, {
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
  fetch(`http://${BASE_URL}/solution_api/${solutionID}/comments/${commentID}`, {
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

const deleteCommentbyId = (solutionID, commentID) => {
  const token = userToken()
  return axios.delete(`http://${BASE_URL}/solution_api/${solutionID}/comments/${commentID}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.data)
    .catch(error => alert(error))
}

const fetchLikesbySolution = (solutionID) => {
  const token = userToken()
  return axios.get(`http://${BASE_URL}/solution_api/${solutionID}/likes`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.data)
    .catch(error => alert(error))
}

const createLike = (likeObj, solutionID) => {
  const token = userToken()
  fetch(`http://${BASE_URL}/solution_api/${solutionID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify(likeObj)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => alert(error))
}

const getUserData = () => {
  const token = userToken()
  return axios.get(`http://${BASE_URL}/solution_api/accounts/get-user`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
  .then(res => {
    localStorage.setItem('userID', String(res.data.user_id))
    localStorage.setItem('username', res.data.username)
  })
  .catch(error => alert(error))
}

const getWikiArticle = (search) => {
  const token = userToken()
  return axios.post(`http://${BASE_URL}/solution_api/third_party`, {"data": search}, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
    .then(res => res.data)
    .catch(err => alert(err))
}

export {
  fetchAllSolutions,
  fetchSolutionbyId,
  fetchCommentsbySolution,
  createComment,
  putCommentbyId,
  deleteCommentbyId,
  fetchLikesbySolution,
  createLike,
  createSolution,
  putSolutionbyId,
  deleteSolutionbyId,
  getWikiArticle,
  getUserData
};