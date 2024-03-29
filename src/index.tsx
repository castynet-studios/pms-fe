import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import StateProvider from 'context'
import App from './App'

import './index.scss'

const root = createRoot(document.getElementById('root')!)

root.render(<BrowserRouter children={<StateProvider children={<App />} />} />)
