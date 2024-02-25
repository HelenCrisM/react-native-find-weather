import React from 'react';

import Styled from './styles';

import EmptyStateContent from '../../utils/EmptyStateContent';

const Home = (): JSX.Element => {
	return (
		<Styled.ScrollView>
			<EmptyStateContent />
		</Styled.ScrollView>
	);
};

export default Home;
