import { Link } from "react-router-dom"
import Trash from '../assets/Trash.svg'
import Modify from '../assets/Modify.svg'
import { useState } from "react"
import PopupDelete from "./PopupDelete"
import PopupEdit from "./PopupEdit"
// take in the comments list for this solution
const CommentList = ({comments, updateComments}) => {

  const userID = Number(localStorage.getItem('userID'))

  const [editPopup, setEditPopup] = useState()
  const [deletePopup, setDeletePopup] = useState()

  return (
    <div>
      
      {/* left align comments title */}
      <h3>Comments</h3>
      <hr />
      {
        comments.result.map((comment, idx) => {
          return (
            <div key={idx}>
              <p>{comment.message}</p>
              <p className="subtext">by {comment.author_name} at {comment.created_at}</p>
              {
                // check if there was an edit. Show date of most recent edit
                comment.created_at === comment.modified 
                ? "" 
                : <p className="subtext">edit at {comment.modified}</p>
              }
              {
                // check if the author of the comment is the same as the logged in user that way they can easily edit/delete comments
                comment.author !== userID
                ? <p></p>
                : <div className="sol-links">
                    <button className="submitBtn" onClick={() => setEditPopup(comment)}>
                      {<img src={Modify} alt="Pencil Icon" />}
                    </button>
                    <button className="submitBtn" onClick={() => setDeletePopup(comment)}>
                      {<img src={Trash} alt="Trash Icon" />}
                    </button>
                  </div>
              }
              <hr />
            </div>  
          )
        })
      }
      {deletePopup && <PopupDelete comment={deletePopup} setTrigger={setDeletePopup} updateComments={updateComments}/>}
      {editPopup && <PopupEdit comment={editPopup} setTrigger={setEditPopup} updateComments={updateComments}/>}
    </div>
  )
}

export default CommentList