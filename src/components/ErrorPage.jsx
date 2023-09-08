import { Link } from "react-router-dom"

const ErrorPage = ({apiError, setApiError}) => {
    if (apiError){
        return <>
        <p>{apiError.status}</p>
        <p>{apiError.statusText}</p>
        <Link to='/topics/All' onClick={() => {setApiError(null)}}>Go back to the homepage?</Link>
        </>  
      } else {
        return (
            <>
              <h1>error</h1>
              <Link to='/topics/All'>Go back to the homepage?</Link>
        
              
        
            </>
        )
      }
      

}

export default ErrorPage
