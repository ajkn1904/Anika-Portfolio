import React from 'react'
import { Toaster } from 'react-hot-toast';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Blog from './components/Blog/Blog';
import ProjectsDetails from './components/Projects/ProjectsDetails';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'projectDetails/:id',
          element: <ProjectsDetails/>
        },
        {
          path: '/blog',
          element: <Blog/>
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
