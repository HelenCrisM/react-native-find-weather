import styled from 'styled-components/native';
import { IButton } from '../../@types/button-types';

export const StyledButton = styled.TouchableOpacity.attrs(() => ({
	activeOpacity: 0.75,
}))<IButton>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-color: ${({ borderColor }) => borderColor};
`;
