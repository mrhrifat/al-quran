/**
* Title: Root
* Description:
* Filename: Root.jsx
* Path: /src/Root.jsx
* Author: Mrh Rifat (Programmer)
* Date: Apr 30, 2023
*
*/

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Formation, Home, Salah, SurahInfo, Verses } from './components'

const Root = () => {

  return (
    <BrowserRouter>
      <Formation>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/salah' element={<Salah />} />
          <Route path='/:chapterId' element={<Verses />} />
          <Route path='/:chapterId/info' element={<SurahInfo />} />
        </Routes>
      </Formation>
    </BrowserRouter>
  )
}

export default Root