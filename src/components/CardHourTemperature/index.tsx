import React from 'react';
import { Image } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

import Styled from './styles';
import { ICardHourTemperatureData } from './interfaces';

const CardHourTemperature = ({ data }: ICardHourTemperatureData): JSX.Element => {
	return (
		<Styled.Container>
			{data.map((item) => (
				<Styled.ContainerCard key={item.id}>
					<Styled.ContainerTemperature>
						<Text fontFamily={theme.fontFamily.OverpassBold} fontSize={theme.fontSize.md22} color={theme.colors.white}>
							{item.temperatureValue}
						</Text>
						<Text
							fontFamily={theme.fontFamily.OverpassRegular}
							fontSize={theme.fontSize.xxxs12}
							color={theme.colors.gray100}
							style={{ paddingBottom: 9 }}
						>
							º
						</Text>
					</Styled.ContainerTemperature>

					<Image source={item.icon} />

					<Text fontFamily={theme.fontFamily.OverpassBold} fontSize={theme.fontSize.xxs14} color={theme.colors.gray100}>
						{item.hour}
					</Text>
				</Styled.ContainerCard>
			))}
		</Styled.Container>
	);
};

export default CardHourTemperature;
