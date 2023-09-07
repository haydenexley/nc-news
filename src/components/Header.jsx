import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import { Link } from "react-router-dom"

const Header = ({apiError, setApiError}) => {
const {user} = useContext(UserContext)
const handleClick = () => {
  if(apiError) setApiError(null)
}
  if (user.length !== 0) {
    return (
    <div>
        <h1 id="header-title">NC NEWS</h1>
        <Link to='/topics/All' onClick={handleClick}>Home</Link>
        <h2>Hi there, {user[0].name}</h2>
        
      </div>
    )
  } else {
    return (
      <div>
        <h1 id="header-title">NC NEWS</h1>
      </div>
    )
  }

}

export default Header
