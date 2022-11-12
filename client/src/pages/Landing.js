import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import DenyAccess from "../components/DenyAccess";

class Landing extends React.Component {
  render() {
    return <DenyAccess when="loggedin" redirect="dashboard">
      <Navbar />
      <Typography>Landing Page</Typography>
      <Footer />
    </DenyAccess>
  }
}

export default Landing;