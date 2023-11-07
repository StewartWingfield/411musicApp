import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./LogIn.css";

function LogIn(props) {
  const { setIsLoggedIn } = props;

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <div id="LogInContainer">
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "25ch",
            display: "flex",
            margin: "auto",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />

        <Button onClick={handleLogIn} id="button" variant="contained">
          LOGIN
        </Button>
      </Box>
    </div>
  );
}

export default LogIn;
