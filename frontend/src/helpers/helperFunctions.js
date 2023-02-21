
// const formulate = (C1, C2, V2) => {
//   // C1V1 = C2V2
//   let V1 = C2 * V2 / C1


// }

const userToken = () => {
  let token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  return token
}

export {
  userToken
}