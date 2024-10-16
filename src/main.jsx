import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/layout/screens/home/Home.jsx'
import NotFound from './components/layout/screens/not-found/NotFound.jsx'
import Catalog from './components/layout/screens/catalog/Catalog.jsx';
import './assets/styles/index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFound/>,
},
{
  path: "/Catalog",
  element: <Catalog/>
}
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
