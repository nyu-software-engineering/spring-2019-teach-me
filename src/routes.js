//https://github.com/evedes/ReactRouter_Boilerplate_01

import React from 'react';
import { Home } from './views/Home';
import { NoMatch } from './views/NoMatch';
import { Classes } from './views/Classes'
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route exact path="/home" component={Home} />
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Route exact path="/classes" component={Classes} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	);
};