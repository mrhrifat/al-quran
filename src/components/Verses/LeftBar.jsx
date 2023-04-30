/**
* Title: LeftBar
* Description:
* Filename: LeftBar.jsx
* Path: /src/components/Verses/LeftBar.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import React from 'react'
import { useSelector } from 'react-redux'
import { AudioPlayer, ChapterDetails, Pagination } from '../'
import { getQuery } from '../../redux/settings/query'

const LeftBar = () => {
    const query = useSelector(getQuery)
    return (
        <>
            <Stack direction={{ sm: 'row', md: 'column', }} gap={2} marginTop={{ xs: 5, md: 15 }}>
                <Grid container>
                    <Grid item md={12} xs={12} sm={6}>
                        <ChapterDetails />
                    </Grid>
                    <Grid item md={12} xs={12} alignSelf='center' sm={6}>
                        <Pagination />
                    </Grid>
                </Grid>

                {query.audio === true ? <AudioPlayer /> : <></>}
            </Stack>
        </>
    )
}

export default LeftBar