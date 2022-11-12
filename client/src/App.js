import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Redux
import { fetchUser } from './store/actions';
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
            <Route path="/dashboard" element={<Dashboard />} />
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
}

export default connect(mapStateToProps, { fetchUser })(App);
