import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from '../components/screens/not-found/NotFound'
import Home from '../components/layout/screens/home/Home'
import Catalog from '../components/layout/screens/catalog'
import App from '../App';
import { routes } from './routes.data'

const Router = () => {
	

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/catalog">
						<Catalog />
					</Route>
				</Switch>
			</div>
    	</Router>
	)
}

export default Router