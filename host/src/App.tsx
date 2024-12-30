import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import 'tailwindcss/tailwind.css';

const Content = lazy(() => import('content/Content'))
const Session = lazy(() => import('content/Session'))
const Layout = lazy(() => import('layout/Layout'))

const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Content />
      </Layout>
    </Suspense>
  </>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)