/**
* Title: Pagination
* Description:
* Filename: Pagination.jsx
* Path: /src/components/Verses/Pagination.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getVerses } from '../../redux/api/verses';
import { getQuery, setChapterID, setPage } from '../../redux/settings/query';

const CustomButton = styled(Button)(({ theme }) => ({
  '&.MuiButton-root.Mui-disabled': {
    backgroundColor: '#177379',
    color: '#0000005c'
  }
}))

const Pagination = () => {
  const verses = useSelector(getVerses)
  const navigate = useNavigate()
  let query = useSelector(getQuery)
  const dispatch = useDispatch()
  let currentPage = verses?.pagination?.current_page
  let nextPage = verses?.pagination?.next_page
  let totalPages = verses?.pagination?.total_pages


  const goNextPage = () => {
    if (nextPage < totalPages) {
      dispatch(setPage(query.page + 1))
    }
  }

  const goPrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(query.page - 1))
    }
  }


  const prevSurah = () => {
    if (query.chapterID > 1) {
      // console.log('Click')
      dispatch(setChapterID(parseInt(query.chapterID - 1)))
      navigate(`/${parseInt(query.chapterID) - 1}`)
    }
    else {
      return null
    }
  }

  const nextSurah = () => {
    if (query.chapterID < 114) {
      dispatch(setChapterID(parseInt(query.chapterID + 1)))
      navigate(`/${parseInt(query.chapterID) + 1}`)
    }
    else {
      return null
    }
  }

  const beginingSurah = () => {
    dispatch(setChapterID(parseInt(query.chapterID === 1 ? 1 : 1)))
    navigate(`/${parseInt(1)}`)
  }

  const endingSurah = () => {
    dispatch(setChapterID(parseInt(query.chapterID === 114 ? 114 : 114)))
    navigate(`/${parseInt(114)}`)
  }

  return (
    <>
      <Stack direction='column' gap={2}>
        <ButtonGroup variant='contained' fullWidth aria-label="contained primary button group">
          <CustomButton
            disabled={currentPage === 1}
            onClick={goPrevPage}>Previous Page</CustomButton>
          <CustomButton disabled={currentPage === totalPages} onClick={goNextPage}>Next Page</CustomButton>
        </ButtonGroup>

        <ButtonGroup variant='contained' fullWidth aria-label="contained primary button group">
          <CustomButton disabled={query.chapterID === 1} onClick={prevSurah}>Previous Surah</CustomButton>
          <CustomButton onClick={nextSurah}>Next Surah</CustomButton>
        </ButtonGroup>

        <ButtonGroup variant='contained' fullWidth aria-label="contained primary button group">
          <CustomButton
            disabled={query.chapterID === 1}
            onClick={beginingSurah}>
            Begining of Surah
          </CustomButton>
          <CustomButton
            disabled={query.chapterID === 114}
            onClick={endingSurah}>
            End of Surah
          </CustomButton>
        </ButtonGroup>
      </Stack>
    </>
  )
}

export default Pagination