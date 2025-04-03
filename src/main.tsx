import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import Context, { myContext } from './Context.tsx';
import { valuesType } from './Components/Addnewtaskbutton.tsx';




createRoot(document.getElementById('root')!).render(
 
  
  <StrictMode>
    <Context>
      <App/>
    </Context>
  
  </StrictMode>,
)
