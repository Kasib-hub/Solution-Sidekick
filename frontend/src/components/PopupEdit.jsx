import { createComment } from "../api/SolutionAPI"
import { useState, useEffect } from "react"

const PopupEdit = ({trigger, setTrigger}) => {

  return (trigger) ? (
    <div>
     <form>
      <p>Share your thoughts on the Solution</p>
      <textarea name="message"/>
      <button className="submitBtn" type='submit'>Post Comment</button>
     </form>
    </div> 
  ) : ""
}

export default PopupEdit