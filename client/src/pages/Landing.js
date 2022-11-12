import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DenyAccess from "../components/DenyAccess";

class Landing extends React.Component {
  render() {
    return <DenyAccess when="loggedin" redirect="dashboard">
      <Navbar />
      <h1>Landing Page</h1>
      <Footer />
    </DenyAccess>
  }
}

export default Landing;