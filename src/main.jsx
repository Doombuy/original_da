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
import Premium from './components/layout/screens/premium-Catalog/premiumCatalog.jsx';
import './assets/styles/index.scss'
import ProductTransition from './components/layout/catalog_modules/ProductTransition.jsx';
import AboutUs from './components/layout/screens/about-us/AboutUs.jsx';
import FavoritesPage from './components/layout/screens/FavoritePage/FavoritePage.jsx';
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
          path: "/premiumCatalog",
          element: <Premium />
      },
      {
          path: "/product/:id",
          element: <ProductTransition products={products} />
      },
      {
        path: "/aboutUs",
        element: <AboutUs/>
      },
      {
        path:"/favoritepage",
        element:<FavoritesPage/>
      }
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
);