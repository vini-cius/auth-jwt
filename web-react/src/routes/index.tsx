import React from 'react';
import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom';

import Login from '../pages/Login';
import ForgotPass from '../pages/ForgotPass';
import Layout from '../layouts/Default';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path="/login"
					render={(props: RouteProps) => <Login {...props} />}
				/>

				<Route
					exact
					path="/forgot"
					render={(props: RouteProps) => <ForgotPass {...props} />}
				/>

				<Route
					path="/"
					render={(props: RouteProps) => <Layout {...props} />}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
