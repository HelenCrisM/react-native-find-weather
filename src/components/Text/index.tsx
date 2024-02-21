import React from 'react';
import { StyledText } from './styles';

const Text = ({ children }: any): JSX.Element => {
	return <StyledText>{children}</StyledText>;
};

export default Text;
