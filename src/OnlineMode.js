import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function OnlineMode(props) {
  const { pink, setPink } = props;
  console.log("pink", pink);
  const handlePink = () => {
    setPink(!pink);
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
            Online Mode
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
            Is this application connected to the internet?
          </Typography>
        </CardContent>
        <PinkSwitch onChange={handlePink} {...label} defaultChecked />
      </Card>
    </div>
  );
}
