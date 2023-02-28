import Spinner from "../assets/Spinner.svg"

const LoadingSpinner = ({wikiArticle}) => {

  return (
    <div>
      {!wikiArticle  
      ? <div>
        
          <img src={Spinner} alt='spinning beaker' />
          <span>Loading Facts!</span>
          <img src={Spinner} alt='spinning beaker' />
        </div>
      : <p>{wikiArticle}</p>}
    </div>
  );
  
}

export default LoadingSpinner