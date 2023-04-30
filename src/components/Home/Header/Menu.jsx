/**
* Title: Menu
* Description:
* Filename: Menu.jsx
* Path: /src/components/Home/Header/Menu.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';


const Menu = () => {
    return (
        <div>
            <Tooltip title="Menu">
                <IconButton
                    sx={{ color: (theme) => theme.palette.black.main, padding: 1, }}
                >
                    <MenuIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default Menu