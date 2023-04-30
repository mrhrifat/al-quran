/**
* Title: Chapter
* Description:
* Filename: Chapter.jsx
* Path: /src/components/Surah/Chapter.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchChaptersList, getChaptersList } from '../../redux/api/chaptersList'
import { getQuery, setChapterID } from '../../redux/settings/query'
import { getSortBy } from '../../redux/settings/sortBy'
import classes from '../../styles/scss/All.module.scss'


const Chapter = () => {

  const dispatch = useDispatch()
  const chaptersList = useSelector(getChaptersList)
  const sortBy = useSelector(getSortBy)
  let query = useSelector(getQuery)


  query = useMemo(() => {
    return {
      language: query.language
    }
  }, [query.language])

  useEffect(() => {
    dispatch(fetchChaptersList(query.language))
  }, [query, dispatch])


  const order = (value, value2) => {
    let a = value.key;
    let b = value2.key;

    if (sortBy === "Ascending") {
      return a - b;
    }
    return b - a;
  };

  return (
    <Grid container spacing={3} sx={{
      justifyContent: 'center',
      marginTop: '10px'
    }}>
      {

        chaptersList?.chapters === undefined ?
          <CircularProgress />
          : chaptersList?.chapters?.map(chapter => (

            <Grid item md={4} sm={6} xs={12} key={chapter.id}>

              <Link to={`/${chapter.id}`}
                style={{ color: '#333', textDecoration: 'none' }} onClick={() => dispatch(setChapterID(chapter.id))}>
                <Card sx={{
                  border: '1px solid #ebeef0',
                  boxShadow: 'none',
                  '& .changeToPrimary': {
                    color: theme => theme.palette.gray.main
                  },


                  '&:hover': {
                    borderColor: theme => theme.palette.primary.main,
                    cursor: 'pointer',
                    '& .card-content': {
                      background: '#f8f9fa'
                    },
                    '& .upperText': {
                      color: theme => theme.palette.mode === 'light' ? theme.palette.black.main : theme.palette.white.main
                    },

                    '& .diamond': {
                      background: theme => theme.palette.primary.main
                    },
                    '& .changeToPrimary': {
                      color: theme => theme.palette.primary.main
                    },
                    '& .changeToWhite': {
                      color: theme => theme.palette.white.main
                    }

                  }
                }}>
                  <CardContent
                    className='card-content'
                    sx={{
                      '&MuiCardContent-root': {
                        padding: '14px',
                      },
                      '&.MuiCardContent-root:last-child': {
                        padding: '14px'
                      }
                    }}>
                    <Stack direction='row' justifyContent='space-between'>
                      <Box>
                        <Stack direction='row' gap={2} alignItems='center'>
                          <Box>
                            <Box
                              sx={{
                                background: theme => theme.palette.lightGray.main,
                              }}
                              className={`${classes.diamond} diamond`}
                            >
                              <Typography variant='body1' component='h6' className='changeToWhite'>{chapter.id}</Typography>
                            </Box>
                          </Box>
                          <Box>
                            <Stack direction='column'>
                              <Typography variant='subtitle2' className='upperText'>
                                {chapter.name_simple}
                              </Typography>
                              <Typography variant='body2' className='changeToPrimary'>
                                {chapter.translated_name.name}
                              </Typography>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                      <Box>
                        <Stack direction='column' alignItems='flex-end'>
                          <Typography variant='subtitle2' className='upperText' sx={{ fontSize: 16, fontFamily: 'Mirza' }}>
                            {chapter.name_arabic}
                          </Typography>
                          <Typography variant='body2' className='changeToPrimary'>
                            {chapter.verses_count} Ayahs
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Link>
            </Grid >
          )).sort(order)
      }
    </Grid >
  )
}

export default Chapter