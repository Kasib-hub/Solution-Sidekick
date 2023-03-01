import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { fetchSolutionbyId, fetchCommentsbySolution } from '../api/SolutionAPI'
import SolutionDetail from '../components/SolutionDetail'
import CommentList from '../components/CommentList'
import CreateComment from '../components/CreateComment'
// here is where the api calls will go
const SolutionDetailPage = () => {

  let {solutionID} = useParams()

  const [solution, setSolution] = useState()
  const [comments, setComments] = useState()

  // make call to fetch by id
  useEffect(() => {
    fetchSolutionbyId(solutionID).then(data => setSolution(data)).catch(err => alert(err))
  }, [])

  // api call to the comments
  useEffect(() => {
    fetchCommentsbySolution(solutionID).then(data => {setComments(data)}).catch(err => alert(err))
  }, [])

  const updateComments = () => {
    fetchCommentsbySolution(solutionID).then(data => {setComments(data)}).catch(err => alert(err))
  }
 
  if (!solution) {return <h2>Loading...</h2>}

  return (
      <div>
        <SolutionDetail solution={solution} />
        {/* push the get comment function down as well*/}
        <CreateComment creatorID={solution.creator} solutionID={solutionID} updateComments={updateComments}/>
        {!comments ? <p></p> : <CommentList comments={comments} />}
      </div>
  )
}

export default SolutionDetailPage