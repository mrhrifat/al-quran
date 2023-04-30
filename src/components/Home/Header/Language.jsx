/**
* Title: Language
* Description:
* Filename: Language.jsx
* Path: /src/components/Home/Header/Language.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import LanguageIcon from "@mui/icons-material/Language"
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import React from "react"
import { useDispatch } from "react-redux"
import { changeLanguage } from "../../../redux/settings/query"

const Language = () => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="Language">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ color: (theme) => theme.palette.black.main, padding: 1 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <LanguageIcon />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
        <MenuItem onClick={() => dispatch(changeLanguage("en"))}>English</MenuItem>
        <MenuItem onClick={() => dispatch(changeLanguage("bn"))}>Bengali</MenuItem>
        <MenuItem onClick={() => dispatch(changeLanguage("ar"))}>  العربية</MenuItem>
        <MenuItem onClick={() => dispatch(changeLanguage("cn"))}>China</MenuItem>
        <MenuItem onClick={() => dispatch(changeLanguage("ta"))}>தமிழ்</MenuItem>
        <MenuItem onClick={() => dispatch(changeLanguage("zh"))}>中文</MenuItem>
        <MenuItem onClick={() => dispatch(changeLanguage("hi"))}>हिन्दी</MenuItem>

      </Menu>
    </Box>
  );
};

export default Language;