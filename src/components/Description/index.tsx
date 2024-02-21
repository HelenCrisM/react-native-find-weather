import React from 'react';
import { StyledDescription } from './styles';

const Description = ({ children }: any): JSX.Element => {
	return <StyledDescription>{children}</StyledDescription>;
};

export default Description;
