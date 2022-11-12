import React from "react";
import DenyAccess from "../components/DenyAccess";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Dashboard extends React.Component {
  render() {
    return <DenyAccess when="loggedout" redirect="/login">
      <Navbar />
      <Footer />
    </DenyAccess>;
  }
}

export default Dashboard;