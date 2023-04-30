/**
* Title: Footer
* Description:
* Filename: Footer.jsx
* Path: /src/components/Home/Footer/Footer.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Lists } from '../../'
import { navigateItems, popularLinks } from '../../../utils/data'


const Footer = () => {
  return (
    <>
      <Box mt={2}>
        <Divider />
      </Box>
      <Container maxWidth='lg' sx={{ marginTop: 2 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
          <Box flex={4}>
            <Stack direction='column'>
              <Typography variant='h4'>Al Quran</Typography>
              <Typography variant='h6'>
                Read, study & learn Holy Al Quran.
              </Typography>
              <Typography variant='subtitle1' sx={{ textAlign: 'justify' }}>
                Al-Quran is a Sadaqah Jariyah. I hope to make it easy for everyone to read, study, & learn Al-Quran. <br></br>Al-Quran has many names including The Noble Quran, Al-Quran Al-Kareem, Al-Ketab, Al-Furqan, Al-Maw'itha, Al-Thikr & Al-Noor.
              </Typography>
            </Stack>
          </Box>

          <Box flex={3}>
            <Lists items={navigateItems} title={'Navigate'} />
          </Box>

          <Box flex={3}>
            <Lists items={popularLinks} title={'Popular Links'} />
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default Footer