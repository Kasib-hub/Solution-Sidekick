import { createComment } from "../api/SolutionAPI"
import { useState, useEffect } from "react"

const CreateComment = ({userID, solutionID}) => {

  const handleSubmit = (event) => {
    // commentObj needs message, solutionID, userID
    event.preventDefault()
    let commentObj = {
      "message": event.target.message.value,
      "solution": solutionID,
      "author": userID
    }
    createComment(commentObj, solutionID)
    window.location.reload()
  }

  return (
    <div>
     <form onSubmit={handleSubmit}>
      <p>Share your thoughts on the Solution</p>
      <textarea name="message"/>
      <button className="submitBtn" type='submit'>Post Comment</button>
     </form>
    </div> 
  )
}

export default CreateComment