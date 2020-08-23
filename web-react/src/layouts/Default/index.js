import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from '~/styles/global';
import { PageWrapper, PageContent } from './styles';

import routes from '~/routes/treeRoutes.js';

const Header = lazy(() => import('../Header'));

export default function Default() {
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
										name={route.name}
										render={props => <route.component {...props} />}
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
