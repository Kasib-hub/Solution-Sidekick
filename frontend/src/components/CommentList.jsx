import { Link } from "react-router-dom"
// take in the comments list for this solution
const CommentList = ({comments}) => {

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
              <div className="sol-links">
                {/* <Link to='#'>Do I need a link?</Link> */}
                {/* comments/likes should go here somewhere  */}
              </div>
              <hr />
            </div>  
          )
        })
      }

    </div>
  )
}

export default CommentList