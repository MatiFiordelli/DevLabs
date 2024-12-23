import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import Content from './components/Content'

const App = () => (
  <>
    <Content />
  </>
)

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)