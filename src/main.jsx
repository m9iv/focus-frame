import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@radix-ui/themes/styles.css'
import '@siddsr/anix/dist/anix.min.css'
import { Theme } from '@radix-ui/themes'

import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme accentColor="purple">
      <App />
    </Theme>
  </StrictMode>
)
