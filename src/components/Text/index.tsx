import React from 'react';
import  Styled from './styles';

const Text = ({ children }: any): JSX.Element => {
	return <Styled.Text>{children}</Styled.Text>;
};

export default Text;
