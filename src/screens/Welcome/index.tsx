import React from 'react';
import Button from '../../components/Button';
import Title from '../../components/Title';
import View from '../../components/View';
import { Image } from 'react-native';
import Text from '../../components/Text';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IStackRoutes } from '../../@types/stack.routes';
import theme from '../../theme';

function Welcome() {
	const navigation = useNavigation<StackNavigationProp<IStackRoutes>>();

	return (
		<View>
			<Image source={require('../../assets/cloud-and-thunder.png')} />
			<Title>Descubra o Clima na sua Cidade</Title>
			<Text
				fontFamily={theme.fontFamily.OverpassRegular}
				fontSize={theme.fontSize.md22}
				color={theme.colors.gray100}
				textAlign="center"
			>
				Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão{' '}
			</Text>
			<Button onPress={() => navigation.navigate('Home')}>
				<Text
					fontFamily={theme.fontFamily.OverpassRegular}
					fontSize={theme.fontSize.md22}
					color={theme.colors.white}
					textAlign="center"
				>
					Iniciar
				</Text>
			</Button>
		</View>
	);
}

export default Welcome;
