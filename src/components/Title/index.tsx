import React from 'react';
import { StyledTitle } from './styles';

const Title = ({ children }: any): JSX.Element => {
	return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
