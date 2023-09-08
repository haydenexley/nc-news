import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import { Link } from "react-router-dom"
import { AppBar, Button, Container, MenuItem, Typography } from "@mui/material"
import { Home } from "@mui/icons-material"

const Header = ({ apiError, setApiError }) => {
  const { user } = useContext(UserContext)
  const handleClick = () => {
    if (apiError) setApiError(null)
  }

  if (user.length !== 0) {
    return (
      <AppBar sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

          <Typography variant="h3">🗞 NC NEWS 🗞</Typography>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: 1}}> 
          <Typography variant="button" sx={{mt: 2}}>
            Hi there, {user[0].name}
          </Typography>
          <MenuItem sx={{px: 4}}>
          <Link style={{ color: 'inherit', textDecoration: "none",  }} to="/topics/All" onClick={handleClick}>
            <Home /> 
          </Link>
        </MenuItem>
          </div>


      </AppBar>
    )
  } else {
    return (
      <AppBar sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant="h3">🗞 NC NEWS 🗞</Typography>
      </AppBar>
    )
  }
}

export default Header

