import { useState } from 'react'
import {  getWikiArticle } from '../api/SolutionAPI'
import { Link } from 'react-router-dom'
import './SolutionDetail.css'
import Table from 'react-bootstrap/Table';
import LoadingSpinner from './LoadingSpinner'


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

  if (!solution) {return <h2>Loading...</h2>}
  return (
      <div className='detail'>
        
        <h2>{solution.title}</h2>
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
              <td>{solution.source_conc}</td>
              <td>&#215;</td>
              <td>{solution.source_vol}</td>
              <td>&#61;</td>
              <td>{solution.final_conc}</td>
              <td>&#215;</td>
              <td>{solution.final_vol}</td>
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