import Spinner from "../assets/Spinner.svg"

const LoadingSpinner = ({wikiArticle}) => {

  return (
    <div>
      {!wikiArticle  ? <img src={Spinner} alt='spinning beaker' /> : <p>{wikiArticle}</p>}
    </div>
  );
  
}

export default LoadingSpinner