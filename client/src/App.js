import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

// Pages
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Dashboard1 from "./pages/Dashboard1";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Redux
import { fetchUser } from "./store/actions";
import { ThemeProvider } from "@mui/material";

// Theming
import "./data/App.css";
const theme = require("./data/theme.js");

class App extends React.Component {
  // Contains routes for the pages
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard1" element={<Dashboard1 />} />
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { fetchUser })(App);
