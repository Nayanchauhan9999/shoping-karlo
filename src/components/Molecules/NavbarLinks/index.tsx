import MenuItem from "@/components/__Shared/MenuItem";
import { Avatar, Divider, ListItemIcon, Menu } from "@mui/material";
import React from "react";
import { INavbarLinks } from "./NavbarLinks.types";
import {
  PersonAdd,
  Logout,
  Settings,
  ShoppingCart,
  FavoriteBorder,
  Notifications,
  ShoppingBag,
  Login,
} from "@mui/icons-material";
import Link from "@/components/__Shared/Link";
import ApiClient from "@/utils/http";
import { useRouter } from "next/navigation";

const NavbarLinks = ({ anchorEl, openMenu, handleCloseMenu }: INavbarLinks) => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await new ApiClient().get("/auth/signout");
      localStorage.clear();
      router.push("/auth/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openMenu}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Avatar /> Profile
        </MenuItem>

        <Divider />
        <Link href={"/auth/signin"}>
          <MenuItem onClick={handleCloseMenu}>
            <ListItemIcon>
              <Login fontSize="small" />
            </ListItemIcon>
            Sign In
          </MenuItem>
        </Link>
        <MenuItem onClick={handleCloseMenu}>
          <ListItemIcon>
            <ShoppingBag fontSize="small" />
          </ListItemIcon>
          Orders
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <ListItemIcon>
            <ShoppingCart fontSize="small" />
          </ListItemIcon>
          Cart
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <ListItemIcon>
            <FavoriteBorder fontSize="small" />
          </ListItemIcon>
          Wishlist
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <ListItemIcon>
            <Notifications fontSize="small" />
          </ListItemIcon>
          Notifications
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign Out
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default NavbarLinks;
