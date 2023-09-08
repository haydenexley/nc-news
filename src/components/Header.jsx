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
      <AppBar>

          <Typography variant="h3">🗞 NC NEWS 🗞</Typography>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}> 
          <MenuItem sx={{px: 4}}>
          <Link style={{ color: 'inherit', textDecoration: "none",  }} to="/topics/All" onClick={handleClick}>
            <Home /> 
          </Link>
        </MenuItem>
          <Typography variant="button">
            Hi there, {user[0].name}
          </Typography>
          </div>


      </AppBar>
    )
  } else {
    return (
      <AppBar>
        <Typography variant="h3">🗞 NC NEWS 🗞</Typography>
      </AppBar>
    )
  }
}

export default Header

