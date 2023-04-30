/**
* Title: Settings
* Description:
* Filename: Settings.jsx
* Path: /src/components/Home/Header/Settings.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { SettingsDrawer } from '../../';

const anchor = "right";

const Settings = () => {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <>
            <Tooltip title="Settings">
                <IconButton
                    sx={{ color: (theme) => theme.palette.black.main, padding: 1 }}
                    onClick={toggleDrawer(anchor, true)}
                >
                    <SettingsIcon />
                </IconButton>
            </Tooltip>

            <SettingsDrawer
                anchor={anchor}
                toggleDrawer={toggleDrawer}
                state={state}
            />
        </>
    )
}

export default Settings