import { Stack } from "@mui/material";
import React from "react";

class Logo extends React.Component {
  render() {
    return <Stack direction="row" alignItems="center" spacing={1}>
      <img alt="" src="./assets/logo.png" height="35px" />
      <h1 className="logo">ambient</h1>
    </Stack>;
  }
}

export default Logo;