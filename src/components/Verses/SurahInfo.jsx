/**
* Title: SurahInfo
* Description:
* Filename: SurahInfo.jsx
* Path: /src/components/Verses/SurahInfo.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import parse from 'html-react-parser'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import madinah from '../../images/madinah.jpg'
import makkah from '../../images/makkah.jpg'
import { fetchChapterInfo, getChapterInfo } from '../../redux/api/chapterInfo'
import { fetchChapterShortInfo, getChapterShortInfo } from '../../redux/api/chapterShortInfo'
import { getQuery } from '../../redux/settings/query'

const SurahInfo = () => {
  const chapterID = useLocation()
  const dispatch = useDispatch()
  const chapterInfo = useSelector(getChapterInfo)
  const chapterShortInfo = useSelector(getChapterShortInfo)
  const filteredPath = chapterID.pathname.replace(/[\D+]/gi, '')
  let query = useSelector(getQuery)

  query = useMemo(() => {
    return {
      chapterID: query.chapterID || filteredPath,
      language: query.language
    }
  }, [query.chapterID, query.language, filteredPath])

  useEffect(() => {
    if (query.chapterID) {
      dispatch(fetchChapterInfo(query))
      if (Object.keys(chapterShortInfo).length === 0) {
        dispatch(fetchChapterShortInfo(query))
      }
    }
  }, [query, dispatch, chapterShortInfo])


  return (
    <>
      <Container maxWidth='lg' sx={{ marginTop: 5 }}>
        <Grid container>


          <Grid item sm={12} md={4}>
            <Stack direction={{ sm: 'row', md: 'column' }} gap={6.5}>
              <Link to={`/${query.chapterID}`} style={{ textDecoration: 'none', width: '-webkit-fill-available' }}>
                <Button variant='contained'>
                  <ArrowBackIcon />
                  Go to Surah
                </Button>
              </Link>
              <Box textAlign='center'>
                {chapterShortInfo?.chapter?.revelation_place === 'macca' ?

                  <img style={{ width: '80%', height: '80%' }} src={makkah} alt="Makkah" /> :
                  <img style={{ width: '80%', height: '80%' }} src={madinah} alt="Madinah" />
                }
              </Box>
            </Stack>
          </Grid>


          <Grid item sm={12} md={8}>
            <Box>
              <Stack direction='row' justifyContent='space-between'>
                <Stack direction='column'>
                  <Typography variant='subtitle1'>{chapterShortInfo?.chapter?.name_simple}</Typography>
                  <Typography variant='subtitle1'>{chapterShortInfo?.chapter?.name_arabic}</Typography>
                </Stack>
                <Stack direction='column'>
                  <Typography variant='subtitle1'>{chapterShortInfo?.chapter?.verses_count} Verses </Typography>
                  <Typography variant='subtitle1'>{chapterShortInfo?.chapter?.translated_name.name}</Typography>
                </Stack>
                <Stack direction='column'>
                  <Typography variant='subtitle1'>Revelation at {chapterShortInfo?.chapter?.revelation_order}</Typography>
                  <Typography variant='subtitle1'>Revelation in {chapterShortInfo?.chapter?.revelation_place}</Typography>
                </Stack>
              </Stack>
            </Box>

            <Box sx={{
              textAlign: 'center',
              marginTop: '35px'
            }}>
              {Object.keys(chapterShortInfo).length !== 0 ? parse(`${chapterInfo?.chapter_info?.text}`) : <CircularProgress />}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default SurahInfo