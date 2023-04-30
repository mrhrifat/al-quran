/**
* Title: ChangeTafsirBy
* Description:
* Filename: ChangeTafsirBy.jsx
* Path: /src/components/Home/Header/ChangeTafsirBy.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTafsirBy, getQuery } from '../../../redux/settings/query'
import { tafsirByObj } from '../../../utils/data'


const ChangeTafsirBy = () => {
    const dispatch = useDispatch()
    const query = useSelector(getQuery)
    const handleChange = event => {
        dispatch(changeTafsirBy(event.target.value))
    }

    return (
        <>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={query.tafsirId}
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
                    }
                    }

                >
                    {
                        tafsirByObj.map(item => (
                            <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </>
    )
}

export default ChangeTafsirBy