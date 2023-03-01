import { Link } from "react-router-dom"
import Trash from '../assets/Trash.svg'
import Modify from '../assets/Modify.svg'
import { useState } from "react"
import PopupDelete from "./PopupDelete"
import PopupEdit from "./PopupEdit"
// take in the comments list for this solution
const CommentList = ({comments}) => {

  const userID = Number(localStorage.getItem('userID'))

  const [editPopup, setEditPopup] = useState(false)
  const [deletePopup, setDeletePopup] = useState(false)

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
                // check if the author of the comment is the same as the logged in user
                comment.author !== userID
                ? <p></p>
                : <div className="sol-links">
                    <button className="submitBtn" onClick={() => setEditPopup(true)}>
                      {<img src={Modify} alt="Pencil Icon" />}
                    </button>
                    <button className="submitBtn" onClick={() => setDeletePopup(true)}>
                      {<img src={Trash} alt="Trash Icon" />}
                    </button>
                    <PopupDelete trigger={deletePopup} setTrigger={setDeletePopup}/>
                    <PopupEdit trigger={editPopup} setTrigger={setEditPopup}/>
                  </div>
              }
              <hr />
            </div>  
          )
        })
      }

    </div>
  )
}

export default CommentList