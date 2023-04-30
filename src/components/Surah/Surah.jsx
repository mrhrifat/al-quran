/**
* Title: Surah
* Description:
* Filename: Surah.jsx
* Path: /src/components/Surah/Surah.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Chapter } from '../'
import { toggleSortBy } from '../../redux/settings/sortBy'


const Surah = () => {
  const dispatch = useDispatch()
  const orderLists = ['Ascending', 'Descending']


  return (
    <Container maxWidth='lg' sx={{ marginTop: 6 }}>
      <Stack direction='column' gap={1}>
        <Box>
          <Stack direction='row' justifyContent='space-between'>
            <Typography variant='h6'>Surah</Typography>
            <Box>
              <Stack direction='row' justifyContent='space-between'>
                <Typography sx={{ width: '70px', alignSelf: 'center' }} variant='subtitle2'>Sort by</Typography>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue={'Ascending'}
                    inputProps={{
                      name: 'surahSort',
                      id: 'uncontrolled-native',
                    }}
                    onChange={(e) =>
                      dispatch(toggleSortBy(e.target.value))}
                  >
                    {
                      orderLists.map(orderList => (
                        <option key={orderList} value={orderList} >
                          {orderList}
                        </option>
                      ))
                    }
                  </NativeSelect>
                </FormControl>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Divider />
        <Chapter />
      </Stack >
    </Container >
  )
}

export default Surah