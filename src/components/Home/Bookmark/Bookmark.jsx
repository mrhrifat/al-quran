import { Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const Bookmark = () => {
  return (
    <Container maxWidth='lg' sx={{ marginTop: 3 }}>
      <Stack direction='column' gap={1}>
        <Typography variant='h6'>
          Bookmark
        </Typography>
        <Divider />
        <Typography variant='body1'>
          You don't have any bookmark!
        </Typography>
      </Stack>
    </Container>
  )
}

export default Bookmark