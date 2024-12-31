import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { pathroutes } from '../../utils/helpers/pathroutes'
import Error404 from '../Error404'

const Content = lazy(() => import('content/Content'))
const Session = lazy(() => import('content/Session'))

export default function Router() {
    
    return (
        <Routes>
            <Route path={pathroutes.home} element={ <Content /> } />
            <Route path={pathroutes.login} element={ <Session /> } />

            <Route path={"*"}  element={ <Error404 /> } />
        </Routes>
    )
    
}
