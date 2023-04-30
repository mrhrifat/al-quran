/**
* Title: ModeSwitch
* Description:
* Filename: ModeSwitch.jsx
* Path: /src/components/Assets/ModeSwitch.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import styled from "@emotion/styled";
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTheme, toggleTheme } from "../../redux/settings/theme";




const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.3),
        border: 25,
        padding: '10px 58px',
        textAlign: 'center',
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: 25,
        },
        '&:first-of-type': {
            borderRadius: 25,
        },
    },
}));

const ModeSwitch = () => {
    const theme = useSelector(getTheme);
    const dispatch = useDispatch();
    const [active, setActive] = React.useState(theme.active);
    const handleChange = (event, newActive) => {
        setActive(event.target.value)
        dispatch(toggleTheme(event.target.value))
    };
    return (
        <>
            <Paper
                elevation={0}
                sx={{
                    textAlign: 'center',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 25
                }}
            >
                <StyledToggleButtonGroup
                    color="primary"
                    value={active}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={{
                        borderRadius: 0,
                    }}
                >

                    <ToggleButton value='light'>
                        Light
                    </ToggleButton>
                    <ToggleButton value='dark'>
                        Dark
                    </ToggleButton>


                </StyledToggleButtonGroup>
            </Paper>
        </>
    )
}


export default ModeSwitch