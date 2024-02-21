import { colors } from './../../theme/colors';
import { fontSize } from '../../theme/fontSize';
import { fontFamily } from './../../theme/fontFamily';
import styled from 'styled-components/native';

export const StyledTitle = styled.Text`
	font-family: ${fontFamily.OverpassSemiBold};
	font-size: ${fontSize.xxl33};
	color: ${colors.white};
  text-align: center;
`;
