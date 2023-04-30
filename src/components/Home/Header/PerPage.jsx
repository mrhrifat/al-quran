/**
* Title: PerPage
* Description:
* Filename: PerPage.jsx
* Path: /src/components/Home/Header/PerPage.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuery, setPerPage } from '../../../redux/settings/query';


const PerPage = () => {
    const query = useSelector(getQuery)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setPerPage(event.target.value))
    };
    return (
        <>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={query.perPage}
                    onChange={handleChange}
                    sx={{
                        borderRadius: '25px',
                        '& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper': {
                            minWidth: '270px'
                        }
                    }}
                    MenuProps={{
                        variant: 'selectedMenu',
                        PaperProps: {
                            sx: {
                                minWidth: '270px !important',
                                width: '270px',
                            }
                        }
                    }}

                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default PerPage