import React from 'react';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../containers/Main';


const routes = (
	<Router history={hashHistory}>
		<Route path="/">
			<IndexRoute component={Main} />
		</Route>
	</Router>
);

module.exports = routes;
