import React from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';

import GlobalStyle from '../../styles/global';
import { PageWrapper, PageContent } from './styles';

import routes from '../../routes/treeRoutes';

import Header from '../Header';

const Default: React.FC = () => {
	return (
		<>
			<GlobalStyle />

			<PageWrapper>
				<Header />

				<PageContent>
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
				</PageContent>
			</PageWrapper>
		</>
	);
}

export default Default;
