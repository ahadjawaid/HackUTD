import React from "react";
import DenyAccess from "../components/DenyAccess";
import { Box, Button, Stack } from "@mui/material";
import { Folder, Add, CloudUpload } from "@mui/icons-material";
import Navbar from "../components/Navbar";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subpage: null
    };

    this.setSubpage = this.setSubpage.bind(this);
  }

  button(name, icon) {
    let className = (this.state.subpage === name) ? "toggled-button" : "";

    return <Button className={className} onClick={(event) => this.setSubpage(event, name)} sx={{ borderRadius: 3, width: "100%", testTransform: "none" }}>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} padding={1} width="100%">
        {icon}
        <h3 className="menu-button">{name}</h3>
      </Stack>
    </Button>;
  }

  setSubpage(event, value) {
    event.preventDefault();

    this.setState({
      page: value
    });
  }

  render() {
    return <DenyAccess when="loggedout" redirect="/login">
      <Navbar type="transparent" />

      <Stack direction="row" spacing={4}>
        <Stack direction="column" alignItems="start" padding={2} spacing={2} maxWidth="200px" color="background">
          <Box />

          {this.button("New Audio", <Add htmlColor="white" />)}
          {this.button("All Recordings", <Folder htmlColor="white" />)}
        </Stack>

        {/* {this.state.subpage === "New Audio" && */}
          <Stack direction="column" alignItems="center">
            <p>Drag and drop audio to transcribe</p>
            <p>OR</p>
            <Button variant="contained"><CloudUpload /> Choose a file</Button>
            <Button variant="contained">Transcribe</Button>
          </Stack>
        
      </Stack>
    </DenyAccess>
  }
}

export default Dashboard;