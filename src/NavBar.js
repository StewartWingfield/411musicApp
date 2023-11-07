import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function NavBar(props) {
  const { isLoggedIn, setIsLoggedIn } = props;
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
          {isLoggedIn ? (
            <Typography
              onClick={handleLogout}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "right", cursor: "pointer" }}
            >
              Logout
            </Typography>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
