import React from 'react'
import { Toaster } from 'react-hot-toast';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Blog from './components/Blog/Blog';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])


  return (
    <>

      <RouterProvider router={router} />

      <Toaster />

    </>
  );
}

export default App;
