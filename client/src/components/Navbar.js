import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import UserAvatar from "../components/UserAvatar";
import AuthService from "../services/AuthService";
import Logo from "./Logo";
import Logout from "@mui/icons-material/Logout";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleUserMenu: false };

    this.openUserMenu = this.openUserMenu.bind(this);
    this.closeUserMenu = this.closeUserMenu.bind(this);
    this.logout = this.logout.bind(this);
  }

  openUserMenu(event) {
    this.setState({ toggleUserMenu: event.target });
  }

  closeUserMenu() {
    this.setState({ toggleUserMenu: false });
  }

  logout() {
    this.closeUserMenu();
    AuthService.logout();
  }

  render() {
    let openUserMenu = Boolean(this.state.toggleUserMenu);
    let color =
      this.props.type === "transparent" ? "transparent" : "background";
    let elevation = this.props.type === "transparent" ? 0 : 5;
    const bold = { fontWeight: 800 };

    return (
      <AppBar
        position="sticky"
        sx={{
          padding: 1,
          boxSizing: "border-box",
          top: 0,
          backdropFilter: "blur(16px)",
        }}
        color={color}
        elevation={elevation}
      >
        <Toolbar>
          <ButtonBase
            sx={bold}
            component="a"
            href={AuthService.authenticated ? "/dashboard" : "/"}
            disableRipple
          >
            <Logo />
          </ButtonBase>

          <Box component="div" sx={{ flexGrow: 1 }} />

          <Stack
            direction="row"
            alignItems="center"
            spacing={1.2}
            component="div"
          >
            {AuthService.authenticated && (
              <div>
                <Tooltip title="Account settings">
                  <IconButton onClick={this.openUserMenu}>
                    <UserAvatar name={AuthService.user.name} />
                  </IconButton>
                </Tooltip>

                <Menu
                  anchorEl={this.state.toggleUserMenu}
                  open={openUserMenu}
                  onClose={this.closeUserMenu}
                >
                  <MenuItem onClick={this.logout}>
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    <ListItemText primary="Sign Out" />
                  </MenuItem>
                </Menu>
              </div>
            )}

            {!AuthService.authenticated && (
              <Button sx={bold} href="/login" variant="contained">
                Sign In
              </Button>
            )}
            {!AuthService.authenticated && (
              <Button sx={bold} href="signup" variant="contained">
                Sign Up
              </Button>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
