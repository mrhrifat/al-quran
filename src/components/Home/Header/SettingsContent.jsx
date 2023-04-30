/**
* Title: SettingsContent
* Description:
* Filename: SettingsContent.jsx
* Path: /src/components/Home/Header/SettingsContent.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const SettingsContent = ({ title, children }) => {
    return (
        <>
            <Box>
                <Typography variant="h6" fontWeight={300} fontSize={16}>
                    {title}
                </Typography>
                {children}
            </Box>
        </>
    )
}

export default SettingsContent