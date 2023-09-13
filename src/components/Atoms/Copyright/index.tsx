import { BoxProps, Link, Typography } from "@mui/material";
import React from "react";

const Copyright = ({}: BoxProps) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://shoping-karlo.vercel.app/">
        shoping karlo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
