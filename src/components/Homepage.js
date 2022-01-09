import React from "react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";

export default function Homepage() {
  //handle any error in logout.
  const [error, setError] = useState("");
  // pass the user data from Auth hook. also, handle logout
  const { currentUser, logout } = useAuth();

  //to redirect to Login page we will use useHistory hook.
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      setError("");
      //logout from firebase.
      await logout();
      history.push("/");
    } catch (e) {
      // for developer to see the error
      console.log(e);
      // to set error to the user
      setError("Failed to Log out.");
    }
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
          Your Profile
        </Typography>

        <Avatar
          alt=""
          sx={{
            height: 200,
            width: 200,
            display: "block",
            margin: "auto",
            boxShadow: 3,
          }}
          src="https://source.unsplash.com/1600x900/?person"
        />

        <Typography
          variant="h5"
          sx={{ m: 3, color: "#1b5e20", textAlign: "center", fontWeight: 600 }}
        >
          Email: {currentUser.email}
        </Typography>

        <div>
          <Button
            variant="contained"
            sx={{
              width: "70%",
              display: "block",
              margin: "auto",
              bgcolor: "#c62828",
              marginBottom: 3,
            }}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </Card>
    </div>
  );
}
