
import { ImageSourcePropType } from 'react-native';

interface IWeatherDescriptionData {
	id: number;
	icon: ImageSourcePropType;
	value: string;
	text: string;
}

export 
interface IWeatherData {
	data: IWeatherDescriptionData[];
}