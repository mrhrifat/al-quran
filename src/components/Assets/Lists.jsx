/**
* Title: Lists
* Description:
* Filename: Lists.jsx
* Path: /src/components/Assets/Lists.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import Badge from '@mui/material/Badge'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import React from 'react'

const Lists = ({ title, items }) => {
    return (
        <>
            {title ? (
                <Typography variant='h6' sx={{ padding: '0 12px', marginTop: 5.2 }}>
                    {title}
                </Typography>
            ) : <></>}
            <nav aria-label="navigateItems">
                <List >
                    {items.map((item) => (

                        <ListItem disablePadding key={item.id}>
                            <ListItemButton sx={{ padding: '0 12px' }}>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                            <Badge badgeContent={item.data} max={286} showZero={false} color='primary'
                                sx={{
                                    '&.MuiBadge-root': {
                                        marginRight: 3
                                    }
                                }}>
                                {item.icon}
                            </Badge>
                        </ListItem>

                    ))}
                </List>
            </nav>
        </>
    )
}

export default Lists