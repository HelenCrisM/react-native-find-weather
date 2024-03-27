import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';

function Routes() {
	return (
		<NavigationContainer>
			<StackRoutes initialRoute={'Welcome'} />
		</NavigationContainer>
	);
}

export default Routes;
