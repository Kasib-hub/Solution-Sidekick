// so now all of my requests need tokens, pass into function?
// logging out is deleting the token and navigating back to sign up page.
const BASE_URL = 'http://127.0.0.1:8000/';
const TOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")

// add a token?
const fetchAllSolutions = () => {
  const data = fetch(`${BASE_URL}solution_api/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${TOKEN}`
    }
  })
    .then(res => res.json())
    .then(data => data.result)
  return data
}

const fetchSolutionbyId = (solutionID) => {
  const data = fetch(`${BASE_URL}wine_api/${solutionID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${TOKEN}`
    }
  })
    .then(res => res.json())
    .then(data => data.result)
  return data
}

// put request on a wine object
const putSolutionbyId = (solutionID, updatedData) => {
  fetch(`${BASE_URL}solution_api/${solutionID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${TOKEN}`
    },
    body: JSON.stringify(updatedData)
  })
    .then(res => res.ok ? console.log('put success') : console.log('put no good'))

}

const signUp = (userData) => {
  return fetch(`${BASE_URL}accounts/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }) 
    
}

// stores token in a cookie
const getToken = (userData) => {
  return fetch(`${BASE_URL}accounts/get-token`, {
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

export {
  BASE_URL,
  fetchAllSolutions,
  fetchSolutionbyId,
  putSolutionbyId,
  signUp,
  getToken,
};