import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import APP from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Users from './components/Users/Users.jsx';



const router = createBrowserRouter([

  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {

        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/user',
        element:<Users></Users>
      }

    ]

  },



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
