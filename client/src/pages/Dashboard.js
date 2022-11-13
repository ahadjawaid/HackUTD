import React from "react";
import DenyAccess from "../components/DenyAccess";
import { Box, Button, Stack } from "@mui/material";
import { Folder, Add, CloudUpload } from "@mui/icons-material";
import Navbar from "../components/Navbar";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "New Audio"
    };

    this.setpage = this.setpage.bind(this);
  }

  button(name, icon) {
    let className = (this.state.page === name) ? "toggled-button" : "";

    return <Button className={className} onClick={() => this.setpage(name)} sx={{ borderRadius: 3, width: "100%", testTransform: "none" }}>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} padding={1} width="100%">
        {icon}
        <h3 className="menu-button">{name}</h3>
      </Stack>
    </Button>;
  }

  setpage(value) {
    this.setState({
      page: value
    });
  }

  render() {
    return <DenyAccess when="loggedout" redirect="/login">
      <Navbar type="transparent" />

      <Stack position="absolute" direction="column" alignItems="start" padding={2} spacing={2} maxWidth="200px" color="background">
        <Box />

        {this.button("New Audio", <Add htmlColor="white" />, () => { this.setSubpage("New Audio") })}
        {this.button("All Recordings", <Folder htmlColor="white" />, () => { this.setSubpage("All Recordings") })}
      </Stack>

      {this.state.page === "New Audio" &&
        <Stack direction="column" spacing={1} sx={{ ml: "300px" }}>
          <Box sx={{ border: 1, borderRadius: 4, borderColor: "white", margin: 4 }}>
            <Stack direction="column" alignItems="center" justifyContent="center" spacing={2} padding={10}>
              <p className="info">Drag and drop audio to transcribe</p>
              <p className="info">OR</p>
              <Button variant="contained" sx={{ mt: 4, textTransform: "none" }}>
                <CloudUpload sx={{ mr: 1 }} /> Choose a file
              </Button>
            </Stack>
          </Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ paddingRight: 6, paddingLeft: 6 }} spacing={12}>
            <Box sx={{ flexGrow: 1, backgroundColor: "white", height: 18, borderRadius: 2 }} />
            <Button variant="contained" sx={{ textTransform: "none" }}>Transcribe</Button>
          </Stack>
        </Stack>
      }

      {this.state.page === "All Recordings" &&
        <h1>All Recordings...</h1>
      }
    </DenyAccess>
  }
}

export default Dashboard;