import styled from 'styled-components/native';
import theme from '../../theme';

const Button = styled.TouchableOpacity`
	background-color: ${theme.colors.dark300};
	border-color: ${theme.colors.gray300};
	border-radius: 18px;
`;

export default { Button };
