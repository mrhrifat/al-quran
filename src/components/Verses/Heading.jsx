/**
* Title: Heading
* Description:
* Filename: Heading.jsx
* Path: /src/components/Verses/Heading.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Typography from '@mui/material/Typography'
import React from 'react'
import { useSelector } from 'react-redux'
import { getChapterShortInfo } from '../../redux/api/chapterShortInfo'

const Heading = () => {
    const chapterShortInfo = useSelector(getChapterShortInfo)

    return (
        <Typography variant='h4' textAlign='center'>{chapterShortInfo?.chapter?.name_arabic}</Typography>
    )
}

export default Heading