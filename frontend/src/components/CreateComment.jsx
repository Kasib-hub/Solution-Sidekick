import { createComment } from "../api/SolutionAPI"

const CreateComment = ({solutionID, updateComments}) => {

  const userID = Number(localStorage.getItem('userID'))

  const handleSubmit = (event) => {
    // commentObj needs message, solutionID, userID
    event.preventDefault()
    let commentObj = {
      "message": event.target.message.value,
      "solution": solutionID,
      "author": userID
    }
    createComment(commentObj, solutionID)
    setTimeout(() => {
      updateComments()
    }, 250)
    alert("Comment successfully created!")
    event.target.message.value = ""
  }

  return (
    <div className="general-box">
     <form onSubmit={handleSubmit}>
      <p>Share your thoughts on the Solution</p>
      <textarea name="message" placeholder="Make a Comment"/>
      <button className="submitBtn" type='submit'>Post Comment</button>
     </form>
    </div> 
  )
}

export default CreateComment