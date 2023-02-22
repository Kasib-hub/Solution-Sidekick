

const DeleteSolution = ({solution}) => {
  
  return (
    <div>
      <p>Are you sure you want to delete {solution.title}?</p>
      <p>Created at {solution.created_at}</p>
    </div>
    
  )

}

export default DeleteSolution