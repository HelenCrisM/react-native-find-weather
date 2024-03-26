import { ImageSourcePropType } from "react-native";

interface ICardHourTemperature {
	id: number;
	temperatureValue: number;
	icon: ImageSourcePropType;
	hour: string;
}

export interface ICardHourTemperatureData {
	data: ICardHourTemperature[];
}

