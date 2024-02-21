import { colors } from '../../theme/colors';
import { fontSize } from '../../theme/fontSize';
import { fontFamily } from './../../theme/fontFamily';
import styled from 'styled-components/native';

export const StyledDescription = styled.Text`
	font-family: ${fontFamily.OverpassRegular};
	font-size: ${fontSize.md22};
	color: ${colors.gray100};
	text-align: center;
`;