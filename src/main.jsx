import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([

  {
    path:'/',
    element: <div> hello from react router</div>
  },

  {
    path: '/about',
    element: <div>in the about page</div>
  },
  {
    path: '/contact',
    element: <div>contact me </div>
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
