import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import MainPage from './components/MainPage/MainPage';
import HomePage from './components/HomePage/HomePage';
import AppPage from './components/AppPage/AppPage';
import InstallationPage from './components/InstallationPage/InstallationPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>, 
    
    children: [
      {
        index: true, element: <HomePage></HomePage>,
        loader: ()=>fetch("/app.json").then(res=>res.json())
      }, {
        element: <AppPage></AppPage>,
                loader: ()=>fetch("/app.json").then(res=>res.json()),

        path: "/apps",
      },
      {
        element: <InstallationPage></InstallationPage>,
        path: "/installation"
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
