/**
* Title: TabBar
* Description:
* Filename: TabBar.jsx
* Path: /src/components/Verses/TabBar.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import InfoIcon from '@mui/icons-material/Info';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Audio } from '../';
import { getQuery } from '../../redux/settings/query';

const TabBar = () => {
    const query = useSelector(getQuery)

    return (
        <>
            <Stack direction='row' gap={1}>
                <Link to={`/${query.chapterID}/info`}
                    style={{ textDecoration: 'none' }}>
                    <Fab variant="extended" size="small" color="primary" aria-label="add" sx={{ fontSize: 14 }}>
                        Surah Info <InfoIcon />
                    </Fab>
                </Link>
                <Audio />
            </Stack>
        </>
    )
}

export default TabBar