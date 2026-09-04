import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { install } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'
import { BrowserRouter } from 'react-router'

import './index.css'
import App from './App.jsx'

install({
  presets:[
    presetAutoprefix(),
    presetTailwind(), 
  ],

  theme: {
    extend:{
      colors:{
        primary: ' #1ca301',
        secondary: '#b4fdc6',

      },
    },
  },
  
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
