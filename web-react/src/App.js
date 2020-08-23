import React from 'react';

import Theme from '~/styles/theme';
import Routes from '~/routes';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
	return (
		<Theme>
			<Routes />
		</Theme>
	);
}
