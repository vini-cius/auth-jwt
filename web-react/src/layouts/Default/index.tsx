import React, { Suspense, lazy } from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';

import GlobalStyle from '../../styles/global';
import { PageWrapper, PageContent } from './styles';

import routes from '../../routes/treeRoutes';

const Header = lazy(() => import('../Header'));

const Default: React.FC = () => {
	const loading = () => (
		<div>
			<strong>Loading...</strong>
		</div>
	);

	return (
		<>
			<GlobalStyle />

			<PageWrapper>
				<Header />

				<PageContent>
					<Suspense fallback={loading()}>
						<Switch>
							{routes.map((route, index) => {
								return route.component ? (
									<Route
										key={index}
										path={route.path}
										exact={route.exact}
										render={(props: RouteProps) => <route.component {...props} />}
									/>
								)
								: null;
								})
							}
						</Switch>
					</Suspense>
				</PageContent>
			</PageWrapper>
		</>
	);
}

export default Default;
