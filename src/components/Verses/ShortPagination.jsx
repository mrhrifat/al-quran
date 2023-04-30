/**
* Title: ShortPagination
* Description:
* Filename: ShortPagination.jsx
* Path: /src/components/Verses/ShortPagination.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVerses } from '../../redux/api/verses'
import { getQuery, setPage } from '../../redux/settings/query'


const CustomButton = styled(Button)(({ theme }) => ({
    '&.MuiButton-root.Mui-disabled': {
        backgroundColor: '#177379',
        color: '#0000005c'
    }
}))


const ShortPagination = () => {
    const dispatch = useDispatch()
    const query = useSelector(getQuery)
    const verses = useSelector(getVerses)

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

    return (
        <Box marginTop={2}>
            <Divider />
            <Grid container spacing={2} marginTop={1} justifyContent='center'>
                <Grid item md={4} xs={10} sm={8}>
                    <ButtonGroup variant='contained' fullWidth aria-label="contained primary button group">
                        <CustomButton
                            disabled={currentPage === 1}
                            onClick={goPrevPage}>
                            Previous Page
                        </CustomButton>
                        <CustomButton
                            disabled={currentPage === totalPages}
                            onClick={goNextPage}>
                            Next Page
                        </CustomButton>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ShortPagination