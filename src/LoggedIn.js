import React, { useState } from "react";
import OnlineMode from "./OnlineMode";
import MasterVolume from "./MasterVolume";
import SoundQuality from "./SoundQuality";
import "./LoggedIn.css";

function LoggedIn() {
  const [pink, setPink] = useState(true);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState(2);
  return (
    <div id="wrapper">
      <h1>Welcome User!</h1>
      <div id="boxes">
        <OnlineMode pink={pink} setPink={setPink} />
        <MasterVolume volume={volume} setVolume={setVolume} />
        <SoundQuality quality={quality} setQuality={setQuality} />
      </div>

      <h2>System Notifications:</h2>
      {pink ? null : (
        <p>
          Your application is offline. You won't be able to share or stream
          music to other devices.
        </p>
      )}
      {volume > 80 ? (
        <p>
          Listening to music at a high volume could cause long-term hearing
          loss.
        </p>
      ) : null}
      {quality === 1 ? (
        <p>
          Music quality is degraded. Increase quality if your connection allows
          it.
        </p>
      ) : null}
    </div>
  );
}

export default LoggedIn;
