import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { StyledButton } from './styles';




const Button = ({
	backgroundColor,
	borderColor = 'transparent',
	children,
	borderRadius,
	height,
	...rest
}: any): JSX.Element => {
	return (
		<StyledButton
			backgroundColor={backgroundColor}
			borderColor={borderColor}
			borderRadius={borderRadius}
			height={height}
			{...rest}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
