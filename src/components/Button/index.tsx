import React from 'react';
import Styled from './styles';

const Button = ({ children }: any): JSX.Element => {
	return <Styled.Button>{children}</Styled.Button>;
};


export default Button;
