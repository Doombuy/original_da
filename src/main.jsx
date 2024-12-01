import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from './components/layout/screens/home/Home.jsx'
import NotFound from './components/layout/screens/not-found/NotFound.jsx'
import Catalog from './components/layout/screens/catalog/Catalog.jsx'
import './assets/styles/index.scss'
import ProductTransition from './components/layout/catalog_modules/ProductTransition.jsx';
import Layout from './components/layout/Layout.jsx';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      // Загрузка продуктов
      fetch('/data.json')  // Замените на правильный URL вашего API
          .then(response => response.json())
          .then(data => setProducts(data))
          .catch(error => console.error(error));
  }, []);

  const router = createBrowserRouter([
      {
          path: "/",
          element: <Home />,
          errorElement: <NotFound />,
      },
      {
          path: "/catalog",
          element: <Catalog />
      },
      {
          path: "/product/:id",
          element: <ProductTransition products={products} />
      }
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
);