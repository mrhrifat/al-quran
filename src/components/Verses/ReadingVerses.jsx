/**
* Title: ReadingVerses
* Description:
* Filename: ReadingVerses.jsx
* Path: /src/components/Verses/ReadingVerses.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { fetchVerses, getVerses, removeVerses } from '../../redux/api/verses'
import { getQuery, removeChapterID, removeSetPage, setChapterID } from '../../redux/settings/query'

const ReadingVerses = () => {
    const { chapterId } = useParams()
    const dispatch = useDispatch()
    const verses = useSelector(getVerses)
    const queryString = useLocation()
    const filterdPath = queryString.pathname.replace(/[^\w\s]/gi, '')


    let query = useSelector(getQuery)

    useEffect(() => {
        dispatch(setChapterID(parseInt(filterdPath)))
        return () => {
            dispatch(removeChapterID())
            dispatch(removeSetPage())
        }
    }, [filterdPath, dispatch])

    query = useMemo(() => {
        return {
            chapterID: query.chapterID || chapterId,
            language: String(query.language),
            page: query.page,
            perPage: query.perPage
        }
    }, [query.chapterID, chapterId, query.language, query.page, query.perPage])

    useEffect(() => {
        dispatch(fetchVerses(query))
        return () => {
            dispatch(removeVerses())
        }
    }, [query, dispatch])

    return (
        <Box sx={{ direction: 'rtl', textAlign: 'center' }}>
            {
                verses?.verses?.map(verse => (
                    <Typography
                        key={verse.verse_key}
                        variant='h4'
                        fontSize='26px'
                        sx={{
                            marginBottom: '15px',
                            lineHeight: '2.2',
                            marginLeft: 2,
                            display: 'inline-block',

                        }}
                    >
                        {verse.text_uthmani}
                    </Typography>
                ))
            }
        </Box>
    )
}

export default ReadingVerses