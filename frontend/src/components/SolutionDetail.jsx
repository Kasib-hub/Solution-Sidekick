import { useState } from 'react'
import {  getWikiArticle } from '../api/SolutionAPI'
import { Link } from 'react-router-dom'
import './SolutionDetail.css'
import Table from 'react-bootstrap/Table';
import LoadingSpinner from './LoadingSpinner'
import ThumbsUpSelected from '../assets/ThumbsUpSelected.svg'


// here is where the api calls will go
const SolutionDetail = ({solution}) => {

  const userID = Number(localStorage.getItem('userID'))
  const [wikiArticle, setWikiArticle] = useState()
  const [clicked, setClicked] = useState(false)

  // I also need to make another call to my backend that will make a call to the external api, make two urls - wiki and web
  const handleClick = () => {
    getWikiArticle(solution.title).then(data => setWikiArticle(data))
    setClicked(true)
  }

  // so if the userID matches an api call for the likes under solutoin then render the colored thumb otherwise the blank thumb that is a button
  if (!solution) {return <h2>Loading...</h2>}
  return (
      <div className='general-box'>
        <div className='title-likes'>
          <p></p>
          <h2>{solution.title}</h2>
          <span><img src={ThumbsUpSelected} alt='likes img'></img></span>
        </div>
        <p className='creator'>by {solution.creator_name} at {solution.created_at}</p>
        <Table striped className='formula-values'>
          <thead>
            <tr className='overlay'>
              <th>C1</th>
              <th>&#215;</th>
              <th>V1</th>
              <th>&#61;</th>
              <th>C2</th>
              <th>&#215;</th>
              <th>V2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{Number(solution.source_conc).toString()}</td>
              <td>&#215;</td>
              <td>{Number(solution.source_vol).toString()}</td>
              <td>&#61;</td>
              <td>{Number(solution.final_conc).toString()}</td>
              <td>&#215;</td>
              <td>{Number(solution.final_vol).toString()}</td>
            </tr>
          </tbody>
        </Table>
        <div className='instructions'>
          <p>{solution.instructions}</p>
          <button onClick={handleClick} className='submitBtn'><h3>Did you know?</h3></button>
          {!clicked ? <p></p> : <LoadingSpinner wikiArticle={wikiArticle}/>}

        </div>
          {
            solution.creator !== userID ? <p></p>
            : <div>
                <Link to={`/solution/${solution.id}/edit`}>
                  <button className='submitBtn'>EDIT</button>
                </Link>
                <Link to={`/solution/${solution.id}/delete`}>
                  <button className='submitBtn'>DELETE</button>
                </Link>
              </div>
          }


      </div>
  )
}

export default SolutionDetail