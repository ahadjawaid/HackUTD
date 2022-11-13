import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DenyAccess from "../components/DenyAccess";
import { Box, Button, Typography } from "@mui/material";

class Landing extends React.Component {
  render() {
    const bold = { fontWeight: 800 };
    const spacing = 4;

    return (
    <Box sx={{ height: "100vh" }}>
      <DenyAccess when="loggedin" redirect="dashboard">
      <Navbar type="transparent" />
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        height: "80%",
      }}>
        <Box sx={{ maxWidth: "35%"}}>
          <Typography marginBottom={spacing} variant="h2" sx={bold}>Analyze Customer Experience</Typography>
          <Typography marginBottom={spacing} variant="body1">Upload your customer converstaion as an MP3 File and get an breakdown of the emotions of your customer</Typography>
          <Button component="a" href="/signup" variant="contained" sx={bold}>Try It Out</Button>
        </Box>
        <Box>
          <Box component="img" src="/assets/gradient_wave_form.svg" />
        </Box>
      </Box>
      <Footer />
      </DenyAccess>
    </Box>
    );
  }
}

export default Landing;