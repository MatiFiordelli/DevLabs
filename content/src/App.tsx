import 'tailwindcss/tailwind.css';
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import SessionContainer from './features/Session/containers/SessionContainer'
import TodoContainer from './features/Content/containers/TodoContainer'

const App = () => <></>

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)