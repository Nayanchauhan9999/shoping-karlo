import { MenuItemProps } from "@mui/material";
import React from "react";

export interface IMenuItem extends MenuItemProps {
  children?: React.ReactNode;
}
