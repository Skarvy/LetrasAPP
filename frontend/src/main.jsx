import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import {router} from './components/routes/router'
import { ThemeProvider } from './components/context/ThemeProvider'
import { UserProvider } from './components/context/UserProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
     <ThemeProvider>

    <RouterProvider router={router}/>
   
    </ThemeProvider>
    </UserProvider>
  </React.StrictMode>,
)
