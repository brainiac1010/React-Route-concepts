import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import APP from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/userDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';



const router = createBrowserRouter([

  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { 
        path: '/about',
        element: <About></About>
      },
      {

        path: '/contact',
        element: <Contact></Contact> 
      },
      {
        path: '/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'), 
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }

    ]

  },



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
