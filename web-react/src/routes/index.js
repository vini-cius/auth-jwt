import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('~/pages/Login'));
const ForgotPass  = lazy(() => import('~/pages/ForgotPass'));
const Layout = lazy(() => import('~/layouts/Default'));

export default function Routes() {
	const loading = () => (
		<div>
			<strong>Loading...</strong>
		</div>
	);

	return (
		<BrowserRouter>
			<Suspense fallback={loading()}>
				<Switch>
					<Route
						exact
						path="/login"
						name="Login Page"
						render={props => <Login {...props} />}
					/>

					<Route
						exact
						path="/forgot"
						name="Forgot Password"
						render={props => <ForgotPass {...props} />}
					/>

					<Route
						path="/"
						name="Home Layout"
						render={props => <Layout {...props} />}
					/>
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}
