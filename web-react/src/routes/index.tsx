import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));
const ForgotPass  = lazy(() => import('../pages/ForgotPass'));
const Layout = lazy(() => import('../layouts/Default'));

const Routes: React.FC = () => {
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
			</Suspense>
		</BrowserRouter>
	);
}

export default Routes;
