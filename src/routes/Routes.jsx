import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from '../components/layout/screens/not-found/NotFound';
import Home from '../components/layout/screens/home/Home'
import Catalog from '../components/layout/screens/catalog/Catalog'



const Routers = () => {
	return (
	  <BrowserRouter>
		<Routes>
		  <Route path="/" element={<Home />} />
		  <Route path="/Catalog" element={<Catalog/>} />
		  <Route path="*" element={<NotFound/>} />
		</Routes>
	  </BrowserRouter>
	);
  }

export default Routers