/**
* Title: Audio
* Description:
* Filename: Audio.jsx
* Path: /src/components/Audio/Audio.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import { PlayCircle } from '@mui/icons-material'
import Fab from '@mui/material/Fab'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChapterRecitation } from '../../redux/api/chapterRecitation'
import { getQuery, setAudio } from '../../redux/settings/query'

const Audio = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setAudio())
    }

    let query = useSelector(getQuery)

    query = useMemo(() => {
        return {
            recitationID: query.recitationID,
            chapterID: query.chapterID
        }
    }, [query.recitationID, query.chapterID])

    useEffect(() => {
        if (query.chapterID && query.recitationID) {
            dispatch(fetchChapterRecitation(query))
        }
    }, [dispatch, query])



    return (
        <>
            <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
                sx={{ fontSize: 14 }}
                onClick={handleClick}
            >
                Audio
                <PlayCircle />
            </Fab>

        </>
    )
}

export default Audio