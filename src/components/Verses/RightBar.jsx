/**
* Title: RightBar
* Description:
* Filename: RightBar.jsx
* Path: /src/components/Verses/RightBar.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useSelector } from 'react-redux'
import { Bismillah, ReadingVerses, TranslationVerses } from '../'
import { getChapterShortInfo } from '../../redux/api/chapterShortInfo'
import { getVerses } from '../../redux/api/verses'
import { getVersesType } from '../../redux/settings/versesType'


const RightBar = () => {
    const verses = useSelector(getVerses)
    const versesType = useSelector(getVersesType)
    const chapterShortInfo = useSelector(getChapterShortInfo)

    return (
        <>
            <Stack direction='column' gap={2}>
                <Typography variant='h4' textAlign='center'>{chapterShortInfo?.chapter?.name_arabic}</Typography>
                {
                    Object.keys(verses).length === 2 &&
                        verses?.verses[0].verse_key === '9:1' ?
                        <></> :
                        <Bismillah />
                }
                {
                    versesType.active.includes('translation') ? <TranslationVerses /> : <ReadingVerses />
                }

            </Stack>
        </>
    )
}

export default RightBar