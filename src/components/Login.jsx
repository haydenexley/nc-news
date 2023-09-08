import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUsers } from "./utils";
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

const Login = () => {
  const {user, setUser} = useContext(UserContext);
  const [username, setUsername] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    getUsers().then((apiUsers) => {
      const foundUser = apiUsers.filter((apiUser) => apiUser.username === username);
      if (foundUser) {
        setUser(foundUser);
      }
    });
  };

  return (
    <Container sx={{ display: 'flex', my: 10,alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
      <Paper elevation={2} sx={{ bgcolor: '#f0f0f0', p: 8, width: '100vh' , height: '40vh'}}>
        <Typography variant="h3" align="center">
          Log in
        </Typography>
        <form onSubmit={handleLoginSubmit}>
            <TextField sx={{bgcolor: '#ffffff', my: 6}} fullWidth
              label="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
                      <Button size="large" variant="contained" type="submit" fullWidth>
            Log in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
