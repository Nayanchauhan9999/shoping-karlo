import { LinkProps } from "next/link";
import React from "react";

export interface ILink extends LinkProps {
  children?: React.ReactNode;
}
