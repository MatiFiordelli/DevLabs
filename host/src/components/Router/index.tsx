import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { pathRoutes } from '../../utils/helpers/pathRoutes'
import Error404 from '../Error404'

const Content = lazy(() => import('content/Content'))
const Session = lazy(() => import('content/Session'))

export default function Router() {
    
    return (
        <Routes>
            <Route path={pathRoutes.home.path} element={ <Content /> } />
            <Route path={pathRoutes.login.path} element={ <Session /> } />

            <Route path={"*"}  element={ <Error404 /> } />
        </Routes>
    )
    
}
