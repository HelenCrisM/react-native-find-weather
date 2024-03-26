import React from 'react';

import Styled from './styles';
import { IDivider } from './interfaces';

const Divider = ({ top, bottom }: IDivider): JSX.Element => {
	return <Styled.Container top={top} bottom={bottom} />;
};

export default Divider;
