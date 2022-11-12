import React from "react";
import DenyAccess from "../components/DenyAccess";
import { Box, ButtonBase, Stack } from "@mui/material";
import Logo from "../components/Logo";
import { Home, Folder } from "@mui/icons-material";

class Dashboard extends React.Component {
  render() {
    return <DenyAccess when="loggedout" redirect="/login">
      <Stack direction="column" alignItems="start" padding={2} spacing={2} maxWidth="200px" color="background">
        <Logo />

        <Box />

        <ButtonBase sx={{ borderRadius: 3, width: "100%" }}>
          <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} padding={2}>
            <Home htmlColor="white" />
            <h3 className="menuButton">Home</h3>
          </Stack>
        </ButtonBase>
        <ButtonBase sx={{ borderRadius: 3, width: "100%" }}>
          <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} padding={2}>
            <Folder htmlColor="white" />
            <h3 className="menuButton">All Recordings</h3>
          </Stack>
        </ButtonBase>
      </Stack>
    </DenyAccess>
  }
}

export default Dashboard;