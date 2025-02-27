import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function LoginPage() {
  // Access the MUI theme for potential theme-related functionalities.
  const theme = useTheme();

  // TODO: Extract login function and error from our authentication context.

  // specifically getting loginError vairable and login function
  const {loginError, login} = useAuth();  

  // State to hold the username and password entered by the user.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  // const [user, setUser] = useState(null);

  // TODO: Handle login function.
  const handleLogin = async () => {
    login(email, password)
  };

  // const handleRegister = async (registerEmail, registerPassword, e) => {
  //   register(registerEmail, registerPassword)
  // }
  const handleRegister = async (e) => {
    e.preventDefault();
    // TODO: Add Firebase signup with email/password functionality here.
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      setRegisterEmail('')
      setRegisterPassword('')
      console.log('ACCOUNT CREATED: '+userCredential.user.email)
    } catch (error) {
      console.error("SIGNUP ERROR: ", error.message)
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            marginBottom: 2,
            height: 100,
            width: 200,
          }}
          alt="UT Longhorn"
          src="/longhorn.jpg"
        ></Box>
        <Typography component="h1" variant="h4" fontWeight="bold">
          Login
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Login Email"
            InputLabelProps={{ shrink: true }}
            placeholder="login email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Login Password"
            type="password"
            id="password"
            InputLabelProps={{ shrink: true }}
            placeholder="login password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
        <Typography component="h1" variant="h4" fontWeight="bold" sx={{ mt: 2 }}>
          Register
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="registerEmail"
            label="Register Email"
            InputLabelProps={{ shrink: true }}
            placeholder="register email"
            autoFocus
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Register Password"
            type="password"
            id="registerPassword"
            InputLabelProps={{ shrink: true }}
            placeholder="register password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>
        </Box>
        {/* TODO: Display Login Error if it exists */}
        { loginError &&
        <Alert severity="error">
          {loginError}
        </Alert>
        }
      </Box>
    </Container>
  );
}

export default LoginPage;
