import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  ArrowDropDown,
  ShoppingCart,
} from "@mui/icons-material";
import Link from "@/components/__Shared/Link";
import { Avatar, Button, Divider, Menu, Paper, Tooltip } from "@mui/material";
import SidebarList from "../Drawer";
import NavbarLinks from "../NavbarLinks";
import ChangeModeSwitch from "@/components/Atoms/ChangeModeSwitch";
import CategoryDropdownList from "../CategoryDropdown";


export default function Navbar() {
  const [profileDropdown, setProfileDropdown] =
    React.useState<null | HTMLElement>(null);
  const [catDropdown, setCatDropdown] = React.useState<null | HTMLElement>(
    null
  );
  const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);
  const [openCategory, setOpenCategory] = React.useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpenSidebar(open);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setOpenSidebar(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            <Link href="/">Shoping Karlo</Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Paper
              component="form"
              sx={{
                p: "1px",
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                width: { xs: "100%", sm: "80%", md: "65%" },
                margin: "auto",
              }}
            >
              <IconButton
                sx={{ p: "8px" }}
                aria-label="menu"
                aria-controls={openCategory ? "long-menu" : undefined}
                aria-expanded={openCategory ? "true" : undefined}
                aria-haspopup="true"
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  setCatDropdown(event.currentTarget);
                }}
              >
                <ArrowDropDown color="primary"/>
              </IconButton>
              <CategoryDropdownList
                openCategory={Boolean(catDropdown)}
                anchorEl={catDropdown}
                handleCloseMenu={() => setCatDropdown(null)}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Products"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
                <SearchIcon color="primary" />
              </IconButton>
            </Paper>
          </Box>

          <ChangeModeSwitch />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex" } }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={(event: React.MouseEvent<HTMLElement>) =>
                  setProfileDropdown(event.currentTarget)
                }
                size="small"
                sx={{ ml: 2 }}
                aria-controls={
                  Boolean(profileDropdown) ? "account-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={Boolean(profileDropdown) ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>

        {/* mobile search bar */}
        <Toolbar sx={{ display: { xs: "block", sm: "none" } }}>
          <Paper
            component="form"
            sx={{
              p: "1px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ p: "8px" }}
              aria-label="menu"
              aria-controls={openCategory ? "long-menu" : undefined}
              aria-expanded={openCategory ? "true" : undefined}
              aria-haspopup="true"
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                setCatDropdown(event.currentTarget);
              }}
            >
              <ArrowDropDown color="primary" />
            </IconButton>
            <CategoryDropdownList
              openCategory={Boolean(catDropdown)}
              anchorEl={catDropdown}
              handleCloseMenu={() => setCatDropdown(null)}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Products"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
              <SearchIcon color="primary" />
            </IconButton>
          </Paper>
        </Toolbar>
      </AppBar>
      <SidebarList open={openSidebar} toggleDrawer={toggleDrawer(false)} />
      <NavbarLinks
        anchorEl={profileDropdown}
        handleCloseMenu={() => setProfileDropdown(null)}
        openMenu={Boolean(profileDropdown)}
      />
    </Box>
  );
}
