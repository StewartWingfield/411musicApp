import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function MasterVolume(props) {
  const { volume, setVolume } = props;
  console.log("volume", volume);
  const handleVolume = (e) => {
    setVolume(e.target.value);
  };
  return (
    <div>
      <Card sx={{ width: "275px", minHeight: "180px" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 16, fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            Master Volume
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
            Overrides all other sound settings in this application
          </Typography>
        </CardContent>
        <Box sx={{ width: 268 }}>
          <Slider
            onChange={handleVolume}
            aria-label="Temperature"
            value={volume}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          />
        </Box>
      </Card>
    </div>
  );
}

export default MasterVolume;
