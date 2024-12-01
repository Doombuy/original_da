import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from '../components/layout/screens/not-found/NotFound';
import Home from '../components/layout/screens/home/Home'
import Catalog from '../components/layout/screens/catalog/Catalog'
import ProductTransition from '../components/layout/catalog_modules/ProductTransition';
import { useEffect, useState } from 'react';

const Routers = () => {
	const [products, setProducts] = useState([]);

    useEffect(() => {
        // Загрузка данных из файла data.json
        fetch('/data.json') // Убедитесь, что путь к data.json правильный
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка сети');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data); // Устанавливаем загруженные данные в состояние
            })
            .catch(error => console.error('Ошибка при загрузке данных:', error));
    }, []);
	return (
	  <BrowserRouter>
		<Routes>
		  <Route path="/" element={<Home />} />
		  <Route path="/Catalog" element={<Catalog/>} />
		  <Route path="*" element={<NotFound/>} />
		  <Route path="/product/:id" element={<ProductTransition products={products} />} />
		</Routes>
	  </BrowserRouter>
	);
  }

export default Routers