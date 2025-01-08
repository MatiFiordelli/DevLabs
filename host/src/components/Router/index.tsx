import React, { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { pathRoutes } from '../../utils/helpers/pathRoutes'
import Error404 from '../Error404'

const Content = lazy(() => import('content/Content'))
const Session = lazy(() => import('content/Session'))

export default function Router() {
    const location = useLocation()
    
    return (
        <Routes location={location} key={location.pathname}>
            <Route path={pathRoutes.home.path} element={ <Session /> } />
            <Route path={pathRoutes.login.path} element={ <Content /> } />

            <Route path={"*"}  element={ <Error404 /> } />
        </Routes>
    )
    
}
