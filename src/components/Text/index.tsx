import React from 'react';
import Styled from './styles';
import { IText } from './interface';

const Text = ({ children, fontSize, fontFamily, color, textAlign = 'center', ...rest }: IText): JSX.Element => {
	return (
		<Styled.Text fontFamily={fontFamily} fontSize={fontSize} color={color} textAlign={textAlign} {...rest}>
			{children}
		</Styled.Text>
	);
};

export default Text;
