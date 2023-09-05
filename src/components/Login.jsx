import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import { getUsers } from "./utils"


const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const [username, setUsername] = useState('')

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    getUsers().then((apiUsers) => {
      const foundUser = apiUsers.filter((apiUser) => apiUser.username === username)
      if (foundUser) {setUser(foundUser)}
    })
    
  }
    
  return (
    <>
    <h1>NC News Log-in</h1>
    <form onSubmit={handleLoginSubmit}>
    <label htmlFor="username">Username: </label>
    <input value={username} onChange={(event) => setUsername(event.target.value)} />
    <button type="submit">Log in</button>
    </form>
    </>
  )
}

export default Login
