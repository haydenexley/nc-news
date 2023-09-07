import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import { Link } from "react-router-dom"

const Header = () => {
const {user} = useContext(UserContext)
  if (user.length !== 0) {
    return (
    <div>
        <h1 id="header-title">NC NEWS</h1>
        <Link to="/topics/All">Home</Link>
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
