/**
* Title: Tafsir
* Description:
* Filename: Tafsir.jsx
* Path: /src/components/Verses/Tafsir.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTafsir, getTafsir, removeTafsir } from '../../redux/api/tafsir'
import { getQuery, removeAyahId } from '../../redux/settings/query'

const Tafsir = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    let query = useSelector(getQuery)
    const tafsir = useSelector(getTafsir)


    useEffect(() => {
        if (query.ayahId !== null) {
            dispatch(fetchTafsir(query))
            setOpen(true)
        }
    }, [dispatch, query])

    const handleClose = () => {
        setOpen(false)
        dispatch(removeAyahId())
        dispatch(removeTafsir())
    }

    return (
        <>

            <Dialog
                open={open}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Title</DialogTitle>
                <DialogContent>


                    {tafsir?.tafsir?.text ? parse(`${tafsir?.tafsir?.text}`) : <CircularProgress />}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}



export default Tafsir