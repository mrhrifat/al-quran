/**
* Title: Formation
* Description:
* Filename: Formation.jsx
* Path: /src/components/Formation.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import React from 'react'
import { Footer, Header } from '.'

const Formation = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Formation