import React from "react";
import OnlineMode from "./OnlineMode";
import MasterVolume from "./MasterVolume";
import SoundQuality from "./SoundQuality";
import "./LoggedIn.css";

function LoggedIn() {
  return (
    <div>
      <h1>Welcome User!</h1>
      <div id="boxes">
        <OnlineMode />
        <MasterVolume />
        <SoundQuality />
      </div>

      <h2>System Notifications:</h2>
    </div>
  );
}

export default LoggedIn;
