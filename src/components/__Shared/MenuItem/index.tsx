import React from "react";
import { StyledMenuItem } from "./menuItem.styles";
import { IMenuItem } from "./menuItem.types";
import { NutinoSansLetin600 } from "@/utils/Fonts";

const MenuItem = ({ children }: IMenuItem) => {
  return (
    <StyledMenuItem className={NutinoSansLetin600.className}>
      {children}
    </StyledMenuItem>
  );
};

export default MenuItem;
