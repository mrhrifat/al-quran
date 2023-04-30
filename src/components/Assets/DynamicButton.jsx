/**
* Title: DynamicButton
* Description:
* Filename: DynamicButton.jsx
* Path: /src/components/Assets/DynamicButton.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Button from "@mui/material/Button";
import React from "react";

const DynamicButton = ({ title, padding, variant }) => {
  return (
    <Button
      variant={variant}
      sx={{
        padding: { padding },
        boxShadow: "none",
        '&.MuiButton-root': {
          border: "1px solid #22A5AD",
          background: variant === "contained"
            ? (theme) => theme.palette.primary.main
            : (theme) => theme.palette.white.main,
          color:
            variant === "contained"
              ? (theme) => theme.palette.white.main
              : (theme) => theme.palette.primary.main,
        },
        '&.MuiButton-root:hover': {
          bgcolor: variant === "contained"
            ? (theme) => theme.palette.white.main
            : (theme) => theme.palette.primary.main,
          color:
            variant === "contained"
              ? (theme) => theme.palette.primary.main
              : (theme) => theme.palette.white.main,
          boxShadow: " rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
        }
      }}
    >
      {title}
    </Button >
  );
};

export default DynamicButton;