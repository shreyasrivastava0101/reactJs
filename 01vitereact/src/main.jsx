import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement=React.createElement(
  'a',
  {href:'https:/google.com',target:'_blank'},
  'click ne to open google'
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // <App />
  // </StrictMode>,
  reactElement
)