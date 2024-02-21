import React from 'react';
import Button from '../../components/Button';
import Title from '../../components/Title';
import View from '../../components/View';
import Description from '../../components/Description';
import { Image } from 'react-native';
import Text from '../../components/Text';

const Welcome: React.FC = () => {
	return (
		<View>
			<Image source={require('../../assets/cloud-and-thunder.png')} />
			<Title>Descubra o Clima na sua Cidade</Title>
			<Description>Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão </Description>
			<Button onPress={() => {}}>
				<Text>Iniciar</Text>
			</Button>
		</View>
	);
};

export default Welcome;
