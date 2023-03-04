

const userToken = () => {
  let token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  return token
}

// check if token got stored before redirecting an authenticated user
const checkToken = () => {
  let token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  console.log(token)
  return token ? true : setTimeout(checkToken, 300)
}

// cut off the trailing zeroes
const cutZeroes = (numStr) => {
  return Number(numStr.toFixed(4))
}

export {
  userToken,
  checkToken
}
