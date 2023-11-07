import { useState } from "react";
import "./App.css";
import LogIn from "./LogIn";
import LoggedIn from "./LoggedIn";
import NavBar from "./NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? <LoggedIn /> : <LogIn setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
