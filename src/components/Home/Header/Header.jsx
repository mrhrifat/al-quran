/**
* Title: Header
* Description:
* Filename: Header.jsx
* Path: /src/components/Home/Header/Header.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from "react";
import { Language, Login, Menu, Settings, WebRedirect, } from "../../";


const Header = () => {
  const match = useMediaQuery('(min-width:500px)')

  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.white.main,
          color: (theme) => theme.palette.black.main,
        }}
      >
        <Container>
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <WebRedirect />
            </Box>

            <Box alignSelf="center">
              <Stack direction="row" justifyContent="space-between">
                {match && <Login />}
                <Language />
                <Settings />
                <Menu />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box></>
  )
}

export default Header