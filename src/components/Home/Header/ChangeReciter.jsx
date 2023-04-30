/**
* Title: ChangeReciter
* Description:
* Filename: ChangeReciter.jsx
* Path: /src/components/Home/Header/ChangeReciter.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeReciter, getQuery } from '../../../redux/settings/query'
import { recitaterObj } from '../../../utils/data'


const ChangeReciter = () => {
    const dispatch = useDispatch()
    const query = useSelector(getQuery)
    const handleChange = (event) => {
        dispatch(changeReciter(event.target.value))
    };

    return (
        <>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={query.recitationID}
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
                        recitaterObj.map(item => (
                            <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </>
    )
}

export default ChangeReciter