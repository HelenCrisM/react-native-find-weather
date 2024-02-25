import { Image, TouchableOpacity } from 'react-native';

import Text from '../../components/Text';

import theme from '../../theme';
import Styled from './styles';

import ClimateChangePNG from '../../assets/climate-change.png';

const EmptyStateContent = () => {
	return (
		<Styled.Container>
			<Styled.ContainerEmptyState>
				<Text fontFamily={theme.fontFamily.OverpassRegular} fontSize={theme.fontSize.xxl33} color={theme.colors.white}>
					Find
					<Text fontFamily={theme.fontFamily.OverpassBold} fontSize={theme.fontSize.xxl33} color={theme.colors.white}>
						Weather
					</Text>
				</Text>

				<Image source={ClimateChangePNG} />

				<TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
					<Text
						fontFamily={theme.fontFamily.OverpassRegular}
						fontSize={theme.fontSize.md22}
						color={theme.colors.gray100}
						style={{ textDecorationLine: 'underline' }}
					>
						Selecione aqui um local e {'\n'} encontre o clima em tempo real
					</Text>
				</TouchableOpacity>
			</Styled.ContainerEmptyState>
		</Styled.Container>
	);
};

export default EmptyStateContent;
