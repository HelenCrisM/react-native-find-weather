import React from 'react';
import { StyledButton } from './styles';

const Button = ({ children }: any): JSX.Element => {
	return <StyledButton>{children}</StyledButton>;
};


export default Button;
