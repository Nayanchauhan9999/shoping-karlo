import React from "react";
import { StyledLink } from "./styles.link";
import { ILink } from "./types.link";

const Link = ({ children, href }: ILink) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

export default Link;
