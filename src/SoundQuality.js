import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SoundQuality() {
  const [normal, setNormal] = useState("");

  const handleChange = (event) => {
    setNormal(event.target.value);
  };
  return (
    <div>
      <Card sx={{ width: "275px", minHeight: "170px" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 16, fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            Sound Quality
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
            Manually control the music quality in event of poor connection
          </Typography>
        </CardContent>
        <FormControl
          variant="standard"
          sx={{
            m: 1,
            minWidth: "95%",
          }}
        >
          <InputLabel id="demo-simple-select-standard-label">Normal</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={normal}
            onChange={handleChange}
            label="Normal"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Low</MenuItem>
            <MenuItem value={20}>Normal</MenuItem>
            <MenuItem value={30}>High</MenuItem>
          </Select>
        </FormControl>
      </Card>
    </div>
  );
}

export default SoundQuality;
