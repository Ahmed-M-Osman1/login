import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button, Alert } from "@mui/material";
import { Box } from "@mui/system";

export default function Signup() {
  const { signup } = useAuth();

  //handle any error in a state.
  const [error, setError] = useState("");

  //prevent making a lot of account by press signup multi-time.
  const [loading, setLoading] = useState(false);

  // use state to take the value from TextFields:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirmation] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangePasswordConfirm(e) {
    setPasswordConfirmation(e.target.value);
  }

  // async function to add the email and pass.
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    if (password !== passwordConfirm) {
      return setError("Password do not match. Please try again.");
    }
    try {
      setError("");
      setLoading(true)
      await signup(email, password);
    } catch (e) {
      // for developer to see the error
      console.log(e);
      // to set error to the user
      setError(
        "failed to creat account. Please try again later with 6 characters password."
      );
    }
    setLoading(false);
  }

  return (
    <div>
      <Card
        sx={{
          mt: 10,
          boxShadow: 3,
          maxWidth: 650,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="card"
      >
        <Typography
          variant="h3"
          sx={{ m: 3, color: "#1b5e20", textAlign: "center" }}
        >
          Sign Up
        </Typography>
        <Box
          component="img"
          sx={{
            height: 200,
            width: 200,
            display: "block",
            margin: "auto",
          }}
          alt="The house from the offer."
          src="https://s3.eu-west-1.amazonaws.com/www.mahaseel.net/images/Mahaseel-web-logo-en.png"
        />
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {loading && (<Alert severity="success" sx={{ mb: 2 }}>You have successfully Sign Up</Alert>)}
        <Container component="main" maxWidth="xs">
          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address (Required)"
              name="email"
              autoComplete="email"
              type="email"
              sx={{ mb: 4, bgcolor: "#e8f5e9" }}
              onChange={handleChangeEmail}
            />

            <TextField
              required
              fullWidth
              id="password"
              label="Password (at least 6 characters)"
              name="password"
              type="password"
              autoComplete="new-password"
              sx={{ mb: 2, bgcolor: "#e8f5e9" }}
              onChange={handleChangePassword}
            />

            <TextField
              required
              fullWidth
              id="passwordConfirm"
              label="Confirm password"
              name="password"
              type="password"
              autoComplete="new-password"
              sx={{ mb: 2, bgcolor: "#e8f5e9" }}
              onChange={handleChangePasswordConfirm}
            />
            <Button
              disabled={loading}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mb: 2, bgcolor: "#1b5e20" }}
            >
              Sign Up
            </Button>
          </form>
        </Container>
      </Card>
      <p style={{ textAlign: "center", fontWeight: 600 }}>
        Already have an account? <Link to="/">Log In</Link>
      </p>
    </div>
  );
}
