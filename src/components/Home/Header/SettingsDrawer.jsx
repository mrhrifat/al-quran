/**
* Title: SettingsDrawer
* Description:
* Filename: SettingsDrawer.jsx
* Path: /src/components/Home/Header/SettingsDrawer.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from "react"
import { ChangeReciter, ChangeTafsirBy, ModeSwitch, PerPage, SettingsContent } from "../../"


const SettingsDrawer = ({ anchor, toggleDrawer, state }) => {


    return (
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onBackdropClick={toggleDrawer(anchor, false)}
        >
            <Box
                sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
                role="presentation"
            >
                <Box>
                    <Typography variant="h6" sx={{ padding: '12px 6px' }} fontWeight={700}>
                        Settings
                    </Typography>
                    <Divider />
                </Box>

                <Box sx={{ padding: 2 }}>

                    <Stack direction='column' gap={2}>

                        <SettingsContent title={'Theme'}>
                            <ModeSwitch />
                        </SettingsContent>
                        <SettingsContent title={'PerPage'}>
                            <PerPage />
                        </SettingsContent>
                        <SettingsContent title={'Reciter'}>
                            <ChangeReciter />
                        </SettingsContent>
                        <SettingsContent title={'Tafsir By'}>
                            <ChangeTafsirBy />
                        </SettingsContent>


                        {/*
                         <Box>
                            <Typography variant="h6" fontWeight={300} fontSize={16}>
                                Theme
                            </Typography>
                            <ModeSwitch />
                        </Box> 
                        <Box>
                            <Typography variant="h6" fontWeight={300} fontSize={16}>
                                Per Page
                            </Typography>
                            <PerPage />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight={300} fontSize={16}>
                                Reciter
                            </Typography>
                            <ChangeReciter />
                        </Box>
                        <Box>
                            <Typography variant="h6" fontWeight={300} fontSize={16}>
                                Tafsir By
                            </Typography>
                            <ChangeTafsirBy />
                        </Box>
                    */}

                    </Stack>
                </Box>
            </Box>
        </Drawer>
    );
};

export default SettingsDrawer;