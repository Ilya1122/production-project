import React, { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { useTheme } from './theme/useTheme'

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'

import './styles/index.scss'
import { classNames } from './helpers/classNames/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>

      <Link to="/">Main page</Link>
      <Link to="/about">About Page</Link>
  
      
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path='/about' element={<AboutPageAsync />} />
            <Route path='/' element={<MainPageAsync />} />
          </Routes>
        </Suspense>
    </div>
  )
}

export default App
