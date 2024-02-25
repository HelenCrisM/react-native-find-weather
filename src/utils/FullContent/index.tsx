import { Image } from 'react-native';

import Text from '../../components/Text';

import RainingPNG from '../../assets/raining.png';
import WeatherDescription from '../../components/WeatherDescription';
import CardHourTemperature from '../../components/CardHourTemperature';

import theme from '../../theme';
import Styled from './styles';

import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Temperature from '../../components/Temperature';
import dataWeatherDescription from '../../storage/dataWeatherDescription';
import dataCardHourTemperature from '../../storage/dataCardHourTemperature';


const FullContent = () => (
	<>
		<Styled.Container>
			<Styled.LocationIconContainer>
				<Ionicons name="location-sharp" size={22} color={theme.colors.white} />

				<Styled.LocationTextContainer>
					<Styled.LocationCityCountryContainer>
						<Text
							fontFamily={theme.fontFamily.OverpassRegular}
							fontSize={theme.fontSize.sm18}
							color={theme.colors.white}
						>
							{''} A Coruña, {''}
						</Text>

						<Text
							fontFamily={theme.fontFamily.OverpassRegular}
							fontSize={theme.fontSize.sm18}
							color={theme.colors.white}
						>
							Espanha
						</Text>
					</Styled.LocationCityCountryContainer>

					<Text
						fontFamily={theme.fontFamily.OverpassRegular}
						fontSize={theme.fontSize.xs16}
						color={theme.colors.gray100}
					>
						{''} Domingo, 01 Jan de 2023
					</Text>
				</Styled.LocationTextContainer>
			</Styled.LocationIconContainer>

			<Styled.ImageContainer>
				<Image source={RainingPNG} />
			</Styled.ImageContainer>

			<Temperature
				maxTemp={23}
				minTemp={18}
				maxTempFontSize={theme.fontSize.giant76}
				minTempFontSize={theme.fontSize.xl40}
			/>

			<Text fontFamily={theme.fontFamily.OverpassRegular} fontSize={theme.fontSize.md22} color={theme.colors.gray100}>
				Chuva Moderada
			</Text>
		</Styled.Container>

		<WeatherDescription data={dataWeatherDescription} />

		<Styled.TodayAnd7NextDaysContainer>
			<Text fontFamily={theme.fontFamily.OverpassRegular} fontSize={theme.fontSize.md20} color={theme.colors.white}>
				Hoje
			</Text>

			<Styled.Next7DaysContainer>
				<Text fontFamily={theme.fontFamily.OverpassRegular} fontSize={theme.fontSize.xs16} color={theme.colors.gray100}>
					Próximos 7 dias
				</Text>

				<SimpleLineIcons name="arrow-right" size={11} color={theme.colors.gray100} style={{ marginLeft: 4 }} />
			</Styled.Next7DaysContainer>
		</Styled.TodayAnd7NextDaysContainer>

		<CardHourTemperature data={dataCardHourTemperature} />
	</>
);

export default FullContent;
