/**
* Title: Verses
* Description:
* Filename: Verses.jsx
* Path: /src/components/Verses/Verses.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import React from 'react'
import { LeftBar, RightBar, ShortPagination, TabBar, TranslationReading } from '../'

const Verses = () => {
  return (
    <>
      <Divider />

      <Box marginTop={3}></Box>

      <Container maxWidth='lg'>

        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <TabBar />

            <LeftBar />
          </Grid>

          <Grid item md={8} xs={12}>

            <Box width={285} mx='auto'>
              <TranslationReading />
            </Box>
            <RightBar />
          </Grid>

        </Grid>

        <ShortPagination />
      </Container >
    </>
  )
}

export default Verses