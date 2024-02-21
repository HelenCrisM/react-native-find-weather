import styled from 'styled-components/native';
import theme from '../../theme';

export const StyledView = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 11%;
	background-color: ${theme.colors.dark300};
	gap: 16px;
`;
