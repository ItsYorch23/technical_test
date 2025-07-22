// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './styles.css'
// import App from './App.tsx'
 import Router from './router'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     r
//   </StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
      <Router />
  </React.StrictMode>,
)